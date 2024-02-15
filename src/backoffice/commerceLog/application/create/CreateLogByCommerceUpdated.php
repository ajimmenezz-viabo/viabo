<?php declare(strict_types=1);


namespace Viabo\backoffice\commerceLog\application\create;


use Viabo\backoffice\company\domain\events\CommerceUpdatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class CreateLogByCommerceUpdated implements DomainEventSubscriber
{

    public function __construct(private LogCreator $creator)
    {
    }

    public static function subscribedTo(): array
    {
        return [CommerceUpdatedDomainEvent::class];
    }

    public function __invoke(CommerceUpdatedDomainEvent $event): void
    {
        $aggregateId = $event->aggregateId();
        $data = $event->toPrimitives();
        $type = $event->eventName();

        $this->creator->__invoke($aggregateId , $type, $data);
    }
}