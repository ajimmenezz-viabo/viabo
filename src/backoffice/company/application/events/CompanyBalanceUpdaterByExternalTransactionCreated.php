<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\events;


use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\spei\transaction\domain\events\ExternalTransactionCreatedDomainEvent;

final class CompanyBalanceUpdaterByExternalTransactionCreated implements DomainEventSubscriber
{
    public function __construct(private CompanyBalanceUpdaterByExternalTransaction $updater)
    {
    }

    public static function subscribedTo(): array
    {
        return [ExternalTransactionCreatedDomainEvent::class];
    }

    public function __invoke(ExternalTransactionCreatedDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $this->updater->__invoke($transaction);
    }
}