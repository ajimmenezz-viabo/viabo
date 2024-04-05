<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\create;


use Viabo\shared\domain\bus\event\EventBus;
use Viabo\spei\shared\domain\stp\StpRepository;
use Viabo\spei\transaction\domain\services\AccountsDataFinder;
use Viabo\spei\transaction\domain\services\BalanceValidator;
use Viabo\spei\transaction\domain\services\OriginAccountDataFinder;
use Viabo\spei\transaction\domain\services\TransactionsCreator;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;
use Viabo\spei\transaction\domain\Transactions;

final readonly class SpeiPaymentProcessor
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
        bool   $internalTransaction
    ): void
    {
        $originAccount = $this->originAccountDataFinder->__invoke($originBankAccount, $internalTransaction);

        if ($internalTransaction) {
            $this->balanceValidator->__invoke($originAccount, $destinationsAccounts, true);
            $destinationsAccounts = $this->accountsDataFinder->companies($destinationsAccounts);
            $transactions = $this->transactionsCreator->internal(
                $originAccount,
                $destinationsAccounts,
                $concept,
                $userId
            );
        } else {
            $this->balanceValidator->__invoke($originAccount, $destinationsAccounts);
            $destinationsAccounts = $this->accountsDataFinder->externalAccounts($destinationsAccounts);
            $transactions = $this->transactionsCreator->external(
                $originAccount,
                $destinationsAccounts,
                $concept,
                $userId
            );
        }
        $this->registerTransaction($transactions, $originAccount, $internalTransaction);
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
                $transaction->eventExternalTransactionCreated();
            }
            $this->repository->save($transaction);

            $this->bus->publish(...$transaction->pullDomainEvents());
        }, $transactions->elements());
    }
}