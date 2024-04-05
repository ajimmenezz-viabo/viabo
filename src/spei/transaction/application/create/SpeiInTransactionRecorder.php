<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\create;


use Viabo\backoffice\company\application\find\CompanyQueryByBankAccount;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\bus\query\QueryBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\shared\domain\utils\DatePHP;
use Viabo\spei\shared\domain\stp\StpRepository;
use Viabo\spei\stpAccount\application\find\StpAccountQueryByCompany;
use Viabo\spei\stpAccount\application\find\StpAccountsQuery;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;
use Viabo\spei\transaction\domain\Transactions;
use Viabo\spei\transaction\domain\TransactionStatusId;
use Viabo\spei\transaction\domain\TransactionTypeId;

final readonly class SpeiInTransactionRecorder
{
    private DatePHP $date;

    public function __construct(
        private TransactionRepository $repository,
        private StpRepository         $stpRepository,
        private QueryBus              $queryBus,
        private EventBus              $bus
    )
    {
        $this->date = new DatePHP();
    }

    public function __invoke(string $company, int $date): void
    {
        $TransactionType = $this->searchTransactionType();
        $statusId = $this->searchStatus();
        $stpAccounts = $this->searchStpAccounts($company);
        $transactions = $this->searchSpeiInsTransactions($date, $stpAccounts);
        $transactions = $this->filterSpeiInsNotRegistered($transactions);
        $transactions = $this->removeDuplicate($transactions);
        $transactions = $this->addCommissions($transactions);
        $transactions = Transactions::fromSpeiIn($transactions, $TransactionType, $statusId);
        $this->save($transactions);
    }

    public function searchTransactionType(): TransactionTypeId
    {
        return $this->repository->searchType('2');
    }

    private function searchStatus(): TransactionStatusId
    {
        return $this->repository->searchStatus('3');
    }

    public function searchStpAccounts(string $company): array
    {
        $stpAccounts = empty($company) ?
            $this->queryBus->ask(new StpAccountsQuery()) :
            $this->queryBus->ask(new StpAccountQueryByCompany($company));
        return $stpAccounts->data;
    }

    public function searchSpeiInsTransactions(int $date, array $stpAccounts): array
    {
        $date = empty($date) ? $this->date->formatDateTime($this->date->dateTime(), 'Ymd') : strval($date);
        $transactions = [];
        foreach ($stpAccounts as $stpAccount) {
            $transactions = array_merge($transactions, $this->stpRepository->searchSpeiIn($stpAccount, $date));
        }
        return $transactions;
    }

    private function filterSpeiInsNotRegistered(array $transactions): array
    {
        return array_filter($transactions, function (array $transaction) {
            $filter = Filters::fromValues([['field' => 'stpId.value', 'operator' => '=', 'value' => $transaction['id']]]);
            $transaction = $this->repository->searchCriteria(new Criteria($filter));
            return empty($transaction);
        });
    }

    private function removeDuplicate(array $transactions): array
    {
        $ids = [];
        return array_filter($transactions, function (array $transaction) use (&$ids) {
            if (!in_array($transaction['id'], $ids)) {
                $ids[] = $transaction['id'];
                return true;
            } else {
                return false;
            }
        });
    }

    private function addCommissions(array $transactions): array
    {
        return array_map(function (array $transaction) {
            $transaction['commissions'] = $this->searchCompanyCommissions($transaction['cuentaBeneficiario']);
            return $transaction;
        }, $transactions);
    }

    function searchCompanyCommissions(string $bankAccountNumber): array
    {
        try {
            $company = $this->queryBus->ask(new CompanyQueryByBankAccount($bankAccountNumber));
            return $company->data['speiCommissions'];
        } catch (\DomainException) {
            return [
                'speiOut' => 0,
                'speiIn' => 0,
                'internal' => 0,
                'feeStp' => 0,
                'stpAccount' => 0,
                'total' => 0
            ];
        }
    }

    private function save(Transactions $transactions): void
    {
        array_map(function (Transaction $transaction) {
            $this->repository->save($transaction);

            $this->bus->publish(...$transaction->pullDomainEvents());
        }, $transactions->elements());
    }
}