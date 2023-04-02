<?php declare(strict_types=1);


namespace Viabo\analytics\eventSourcing\application;


use Viabo\analytics\eventSourcing\domain\EventSourcingAggregateId;
use Viabo\analytics\eventSourcing\domain\EventSourcingId;
use Viabo\analytics\eventSourcing\domain\EventSourcingModifierId;
use Viabo\analytics\eventSourcing\domain\EventSourcingOccurredOn;
use Viabo\analytics\eventSourcing\domain\EventSourcingType;
use Viabo\analytics\eventSourcing\domain\EventSourcingBody;
use Viabo\shared\domain\bus\event\DomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class StoreDomainEventOccurredOn implements DomainEventSubscriber
{
    public function __construct(private EventSourcingCreator $creator)
    {
    }

    public static function subscribedTo(): array
    {
        return [DomainEvent::class];
    }

    public function __invoke(DomainEvent $event): void
    {
        $id = new EventSourcingId($event->eventId());
        $type = new EventSourcingType($event->eventName());
        $aggregateId = new EventSourcingAggregateId($event->aggregateId());
        $modifierId = new EventSourcingModifierId($event->modifierId());
        $body = EventSourcingBody::create($event->toPrimitives());
        $ocurreOn = new EventSourcingOccurredOn($event->occurredOn());

        ($this->creator)($id , $type , $aggregateId , $modifierId , $body , $ocurreOn);
    }
}