<?php declare(strict_types=1);


namespace Viabo\security\user\application\events;


use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\spei\transaction\domain\events\TransactionCreatedBySpeiInDomainEvent;

final readonly class StpAdminsEmailsFinderBySpeiIn implements DomainEventSubscriber
{

    public function __construct(private StpAdminsEmailsFinder $finder)
    {
    }

    public static function subscribedTo(): array
    {
        return [TransactionCreatedBySpeiInDomainEvent::class];
    }

    public function __invoke(TransactionCreatedBySpeiInDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $this->finder->__invoke($transaction);
    }
}