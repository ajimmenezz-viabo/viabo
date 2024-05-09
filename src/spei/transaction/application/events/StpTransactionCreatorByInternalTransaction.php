<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\events;


use Viabo\shared\domain\bus\event\EventBus;
use Viabo\spei\transaction\domain\services\StatusFinder;
use Viabo\spei\transaction\domain\services\TransactionTypeFinder;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;

final readonly class StpTransactionCreatorByInternalTransaction
{
    public function __construct(
        private TransactionRepository $repository,
        private TransactionTypeFinder $typeFinder,
        private StatusFinder          $statusFinder,
        private EventBus              $bus
    )
    {
    }

    public function __invoke(array $transaction): void
    {
        $speiInType = $this->typeFinder->speiInType();
        $statusId = $this->statusFinder->liquidated();

        $transaction = Transaction::fromInternalSpeiIn($transaction, $speiInType, $statusId);
//        $this->repository->save($transaction);

        $this->bus->publish(...$transaction->pullDomainEvents());
    }
}