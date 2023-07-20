<?php declare(strict_types=1);


namespace Viabo\management\card\domain\events;


use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class UpdatedCardNipDomainEvent extends DomainEvent
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
        return 'updated.card.nip.by.demo.card.updated';
    }

    public function toPrimitives(): array
    {
        return $this->body;
    }
}