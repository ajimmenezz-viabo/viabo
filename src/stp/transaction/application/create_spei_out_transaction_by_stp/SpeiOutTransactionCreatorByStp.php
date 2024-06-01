<?php declare(strict_types=1);


namespace Viabo\stp\transaction\application\create_spei_out_transaction_by_stp;


use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\bus\query\QueryBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\stp\shared\domain\stp\exceptions\StpApiError;
use Viabo\stp\shared\domain\stp\StpRepository;
use Viabo\stp\stpAccount\application\find\StpAccountQueryByCompany;
use Viabo\stp\stpAccount\application\find_stp_accounts\StpAccountsQuery;
use Viabo\stp\transaction\domain\services\AccountsDataFinder;
use Viabo\stp\transaction\domain\services\StatusFinder;
use Viabo\stp\transaction\domain\services\TransactionsCreatorByStp;
use Viabo\stp\transaction\domain\Transaction;
use Viabo\stp\transaction\domain\TransactionRepository;
use Viabo\stp\transaction\domain\Transactions;

final readonly class SpeiOutTransactionCreatorByStp
{

    public function __construct(
        private TransactionRepository    $repository,
        private AccountsDataFinder       $accountsDataFinder,
        private StpRepository            $stpRepository,
        private StatusFinder             $statusFinder,
        private TransactionsCreatorByStp $transactionsCreator,
        private QueryBus                 $queryBus,
        private EventBus                 $bus
    )
    {
    }

    public function __invoke(string $company): void
    {
        try {
            $stpAccounts = $this->searchStpAccounts($company);
            $transactions = $this->searchSpeiOutsTransactions($stpAccounts);
            $transactions = $this->addData($transactions);
            $transactionsNotRegistered = $this->filterSpeiOutsNotRegistered($transactions);
            $transactionsRegistered = $this->filterSpeiOutsRegistered($transactions);
            $this->registerTransactionNotRegistered($transactionsNotRegistered);
            $this->updateTransactionsRegistered($transactionsRegistered, $transactions);
        } catch (StpApiError $apiError) {
        };
    }

    public function searchStpAccounts(string $company): array
    {
        $stpAccounts = empty($company) ?
            $this->queryBus->ask(new StpAccountsQuery()) :
            $this->queryBus->ask(new StpAccountQueryByCompany($company));
        return $stpAccounts->data;
    }

    public function searchSpeiOutsTransactions(array $stpAccounts): array
    {
        $transactions = [];
        foreach ($stpAccounts as $stpAccount) {
            $stpTransactions = $this->stpRepository->speiOut($stpAccount);
            $stpTransactions = array_map(function (array $transaction) use ($stpAccount) {
                $transaction['api'] = $transaction;
                $transaction['stpAccountId'] = $stpAccount['id'];
                $transaction['stpAccountNumber'] = $stpAccount['number'];
                $transaction['businessId'] = $stpAccount['businessId'];
                return $transaction;
            }, $stpTransactions);
            $transactions = array_merge($transactions, $stpTransactions);
        }
        return $transactions;
    }

    private function addData(array $transactions): array
    {
        return array_map(function (array $transaction) {
            $sourceCompany = $this->accountsDataFinder->companies([['bankAccount' => $transaction['cuentaOrdenante']]]);
            $destinationCompany =
                $this->accountsDataFinder->companies([['bankAccount' => $transaction['cuentaBeneficiario']]]);
            $data = ['sourceCompany' => $sourceCompany[0], 'destinationCompany' => $destinationCompany[0]];
            return array_merge($transaction, $data, ['commissions' => []]);
        }, $transactions);
    }

    private function filterSpeiOutsNotRegistered(array $transactions): array
    {
        return array_filter($transactions, function (array $transaction) {
            $filter = Filters::fromValues([
                ['field' => 'stpId.value', 'operator' => '=', 'value' => strval($transaction['idEF'])]
            ]);
            $transaction = $this->repository->searchCriteria(new Criteria($filter));
            return empty($transaction);
        });
    }

    private function filterSpeiOutsRegistered(array $transactions): Transactions
    {
        $transactionsRegistered = [];
        foreach ($transactions as $transactionData) {
            $filter = Filters::fromValues([
                ['field' => 'stpId.value', 'operator' => '=', 'value' => strval($transactionData['idEF'])],
                ['field' => 'active.value', 'operator' => '=', 'value' => '1']
            ]);
            $transaction = $this->repository->searchCriteria(new Criteria($filter));
            if (!empty($transaction)) {
                $transaction = $transaction[0];
                $data = [
                    'stpOperationType' => 'speiOutUpdated',
                    'stpAccountId' => $transactionData['stpAccountId'],
                    'stpAccountNumber' => $transactionData['stpAccountNumber'],
                    'sourceCompanyId' => $transactionData['sourceCompany']['companyId'],
                    'sourceRfc' => $transactionData['sourceCompany']['rfc'],
                    'destinationCompanyId' => $transactionData['destinationCompany']['companyId'],
                    'destinationRfc' => $transactionData['destinationCompany']['rfc'],
                    'destinationBankName' => $transactionData['destinationCompany']['bankName']
                ];
                $transaction->setAdditionData($data);
                $transactionsRegistered[] = $transaction;
            }
        }
        return new Transactions($transactionsRegistered);
    }

    private function updateTransactionsRegistered(Transactions $transactionsRegistered, array $transactions): void
    {
        array_map(function (Transaction $transaction) use ($transactions) {
            foreach ($transactions as $transactionOut) {
                if ($transaction->isSameStpIdAndIsLiquidated($transactionOut['idEF'], $transactionOut['estado'])) {
                    $liquidatedStatus = $this->statusFinder->liquidated();
                    $transaction->updateToLiquidated($transactionOut, $liquidatedStatus);
                    $this->repository->update($transaction);

//                    $this->bus->publish(...$transaction->pullDomainEvents());
                }
            }
        }, $transactionsRegistered->elements());
    }

    private function registerTransactionNotRegistered(array $transactionsNotRegistered): void
    {
        $transactions = array_filter($transactionsNotRegistered, function (array $transaction) {
            $liquidated = 'LQ';
            return $transaction['estado'] === $liquidated && empty($transaction['causaDevolucion']);
        });
        $transactions = $this->transactionsCreator->__invoke($transactions, 'speiOutNotRegistered');
        $this->save($transactions);
    }

    private function save(Transactions $transactions): void
    {
        array_map(function (Transaction $transaction) {
            $this->repository->save($transaction);
//            $this->bus->publish(...$transaction->pullDomainEvents());
        }, $transactions->elements());
    }

}
