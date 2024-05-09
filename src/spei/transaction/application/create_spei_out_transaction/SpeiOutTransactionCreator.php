<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\create_spei_out_transaction;


use Viabo\shared\domain\bus\event\EventBus;
use Viabo\spei\shared\domain\stp\StpRepository;
use Viabo\spei\transaction\domain\services\AccountsDataFinder;
use Viabo\spei\transaction\domain\services\BalanceValidator;
use Viabo\spei\transaction\domain\services\OriginAccountDataFinder;
use Viabo\spei\transaction\domain\services\TransactionsCreator;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;
use Viabo\spei\transaction\domain\Transactions;

final readonly class SpeiOutTransactionCreator
{

    public function __construct(
        private TransactionRepository   $repository,
        private StpRepository           $stpRepository,
        private OriginAccountDataFinder $originAccountDataFinder,
        private BalanceValidator        $balanceValidator,
        private AccountsDataFinder      $accountsDataFinder,
        private TransactionsCreator     $transactionsCreator,
        private EventBus                $bus
    )
    {
    }

    public function __invoke(
        string $userId,
        string $originBankAccount,
        array  $destinationsAccounts,
        string $concept,
        bool   $isInternalTransaction
    ): void
    {
        $originAccount = $this->originAccountDataFinder->__invoke($originBankAccount, $isInternalTransaction);
        $this->balanceValidator->__invoke($originAccount, $destinationsAccounts, $isInternalTransaction);
        $destinationsAccounts = $this->accountsDataFinder->__invoke($destinationsAccounts, $isInternalTransaction);
        $transactions = $this->transactionsCreator->__invoke(
            $originAccount,
            $destinationsAccounts,
            $concept,
            $userId,
            $isInternalTransaction
        );
        $this->registerTransaction($transactions, $originAccount, $isInternalTransaction);
    }

    private function registerTransaction(
        Transactions $transactions,
        array        $stpAccount,
        bool         $internalTransaction
    ): void
    {
        array_map(function (Transaction $transaction) use ($stpAccount, $internalTransaction) {
            if (!$internalTransaction) {
                $stpData = $this->stpRepository->processPayment($stpAccount, $transaction->toArray());
                $transaction->updateStpData($stpData);
            }
            $this->repository->save($transaction);

            $this->bus->publish(...$transaction->pullDomainEvents());
        }, $transactions->elements());
    }
}