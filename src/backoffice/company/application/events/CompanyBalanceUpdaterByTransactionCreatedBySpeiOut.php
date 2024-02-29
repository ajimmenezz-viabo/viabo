<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\events;


use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\spei\transaction\domain\events\TransactionCreatedBySpeiOutNotRegisteredDomainEvent;

final class CompanyBalanceUpdaterByTransactionCreatedBySpeiOut implements DomainEventSubscriber
{
    public function __construct(private CompanyBalanceUpdaterBySpeiOut $updater)
    {
    }

    public static function subscribedTo(): array
    {
        return [TransactionCreatedBySpeiOutNotRegisteredDomainEvent::class];
    }

    public function __invoke(TransactionCreatedBySpeiOutNotRegisteredDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $this->updater->__invoke(
            $transaction['sourceAccount'],
            $transaction['destinationAccount'],
            $transaction['liquidationDate'],
            $transaction['amount']
        );
    }
}