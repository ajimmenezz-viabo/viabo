<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\domain\events;


use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class OperationFailedDomainEvent extends DomainEvent
{
    public function __construct(
        string        $aggregateId ,
        private array $body ,
        string        $modifierId = null ,
        string        $eventId = null ,
        string        $occurredOn = null
    )
    {
        parent::__construct($aggregateId , $modifierId , $eventId , $occurredOn);
    }

    public static function fromPrimitives(string $aggregateId , array $body , string $modifierId , string $eventId , string $occurredOn): DomainEvent
    {
        return new static($aggregateId , $body , $modifierId , $eventId , $occurredOn);
    }

    public static function eventName(): string
    {
        return 'failed.card.operation.by.billing.created';
    }

    public function toPrimitives(): array
    {
        return $this->body;
    }

}