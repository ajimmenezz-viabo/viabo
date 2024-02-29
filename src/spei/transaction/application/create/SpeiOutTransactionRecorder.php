<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\create;


use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\bus\query\QueryBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\spei\shared\domain\stp\StpRepository;
use Viabo\spei\stpAccount\application\find\StpAccountQueryByCompany;
use Viabo\spei\stpAccount\application\find\StpAccountsQuery;
use Viabo\spei\transaction\domain\services\StatusFinder;
use Viabo\spei\transaction\domain\services\TransactionTypeFinder;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;
use Viabo\spei\transaction\domain\Transactions;

final readonly class SpeiOutTransactionRecorder
{

    public function __construct(
        private TransactionRepository $repository,
        private StpRepository         $stpRepository,
        private StatusFinder          $statusFinder,
        private TransactionTypeFinder $typeFinder,
        private QueryBus              $queryBus,
        private EventBus              $bus
    )
    {
    }

    public function __invoke(string $company): void
    {
        $stpAccounts = $this->searchStpAccounts($company);
        $transactions = $this->searchSpeiOutsTransactions($stpAccounts);
        $transactionsNotRegistered = $this->filterSpeiOutsNotRegistered($transactions);
        $transactionsRegistered = $this->filterSpeiOutsRegistered($transactions);
        $this->updateTransactionsRegistered($transactionsRegistered, $transactions);
        $this->registerTransactionNotRegistered($transactionsNotRegistered);
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
            $transactions = array_merge($transactions, $this->stpRepository->speiOut($stpAccount));
        }
        return $transactions;
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
        foreach ($transactions as $transaction) {
            $filter = Filters::fromValues([
                ['field' => 'stpId.value', 'operator' => '=', 'value' => strval($transaction['idEF'])],
                ['field' => 'active.value', 'operator' => '=', 'value' => '1']
            ]);
            $transaction = $this->repository->searchCriteria(new Criteria($filter));
            if (!empty($transaction)) {
                $transactionsRegistered[] = $transaction[0];
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

                    $this->bus->publish(...$transaction->pullDomainEvents());
                }
            }
        }, $transactionsRegistered->elements());
    }

    private function registerTransactionNotRegistered(array $transactionsNotRegistered): void
    {
        $liquidated = 'LQ';
        array_map(function (array $transaction) use ($liquidated) {
            if ($transaction['estado'] === $liquidated && empty($transaction['causaDevolucion'])) {
                $outType = $this->typeFinder->speiOutType();
                $liquidatedStatus = $this->statusFinder->liquidated();
                $transaction = Transaction::fromSpeiOutNotRegistered($transaction, $outType, $liquidatedStatus);
                $this->repository->save($transaction);

                $this->bus->publish(...$transaction->pullDomainEvents());
            }
        }, $transactionsNotRegistered);
    }

}