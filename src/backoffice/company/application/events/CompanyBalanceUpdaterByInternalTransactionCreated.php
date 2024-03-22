<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\events;


use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\spei\transaction\domain\events\InternalSpeiOutTransactionCreatedDomainEvent;

final class CompanyBalanceUpdaterByInternalTransactionCreated implements DomainEventSubscriber
{
    public function __construct(private CompanyBalanceUpdaterByInternalTransaction $updater)
    {
    }

    public static function subscribedTo(): array
    {
        return [InternalSpeiOutTransactionCreatedDomainEvent::class];
    }

    public function __invoke(InternalSpeiOutTransactionCreatedDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $this->updater->__invoke($transaction);
    }
}