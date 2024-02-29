<?php declare(strict_types=1);


namespace Viabo\security\user\application\events;


use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\spei\transaction\domain\events\TransactionCreatedBySpeiOutNotRegisteredDomainEvent;

final readonly class StpAdminsEmailsFinderBySpeiOutNotRegistered implements DomainEventSubscriber
{

    public function __construct(private StpAdminsEmailsFinderBySpeiOut $finder)
    {
    }

    public static function subscribedTo(): array
    {
        return [TransactionCreatedBySpeiOutNotRegisteredDomainEvent::class];
    }

    public function __invoke(TransactionCreatedBySpeiOutNotRegisteredDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $this->finder->__invoke($transaction);
    }
}