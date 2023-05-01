<?php declare(strict_types=1);


namespace Viabo\analytics\eventSourcing\application;


use Viabo\analytics\eventSourcing\domain\EventSourcing;
use Viabo\analytics\eventSourcing\domain\EventSourcingAggregateId;
use Viabo\analytics\eventSourcing\domain\EventSourcingId;
use Viabo\analytics\eventSourcing\domain\EventSourcingModifierId;
use Viabo\analytics\eventSourcing\domain\EventSourcingOccurredOn;
use Viabo\analytics\eventSourcing\domain\EventSourcingRepository;
use Viabo\analytics\eventSourcing\domain\EventSourcingType;
use Viabo\analytics\eventSourcing\domain\EventSourcingBody;

final readonly class EventSourcingCreator
{
    public function __construct(private EventSourcingRepository $repository)
    {
    }

    public function __invoke(
        EventSourcingId          $id ,
        EventSourcingType        $type ,
        EventSourcingAggregateId $aggregateId ,
        EventSourcingBody        $value ,
        EventSourcingOccurredOn  $occurredOn
    ): void
    {

        $modifierId = new EventSourcingModifierId($this->repository->userSession());
        $eventSourcing = new EventSourcing($id , $type , $aggregateId , $modifierId , $value , $occurredOn);

        $this->repository->save($eventSourcing);
    }
}