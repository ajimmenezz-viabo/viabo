<?php declare(strict_types=1);


namespace Viabo\backoffice\projection\application\update_projection_balance;


use Viabo\backoffice\company\domain\events\TransactionCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class UpdateProjectionBalance implements DomainEventSubscriber
{
    public function __construct(private ProjectionBalanceUpdater $updater)
    {
    }

    public static function subscribedTo(): array
    {
        return [TransactionCreatedDomainEvent::class];
    }

    public function __invoke(TransactionCreatedDomainEvent $event): void
    {
        $this->updater->__invoke($event->toPrimitives());
    }
}