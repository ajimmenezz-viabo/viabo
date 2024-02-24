<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\events;


use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\spei\transaction\domain\events\TransactionCreatedBySpeiInDomainEvent;

final class CompanyBalanceUpdaterByTransactionCreatedBySpeiIn implements DomainEventSubscriber
{
    public function __construct(private CompanyBalanceUpdater $updater)
    {
    }

    public static function subscribedTo(): array
    {
        return [TransactionCreatedBySpeiInDomainEvent::class];
    }

    public function __invoke(TransactionCreatedBySpeiInDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $this->updater->__invoke($transaction['destinationAccount'], $transaction['amount']);
    }
}