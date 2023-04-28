<?php declare(strict_types=1);


namespace Viabo\management\card\domain\events;


use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class CardCreatedDomainEvent extends DomainEvent
{
    private array $body;

    public function __construct(
        string $modifierId ,
        string $aggregateId ,
        array  $body ,
        string $eventId = null ,
        string $occurredOn = null
    )
    {
        parent::__construct($modifierId , $aggregateId , $eventId , $occurredOn);
        $this->body = $body;
    }

    public static function fromPrimitives(string $modifierId , string $aggregateId , array $body , string $eventId , string $occurredOn): DomainEvent
    {
        return new self($modifierId , $aggregateId , $body , $eventId , $occurredOn);
    }

    public static function eventName(): string
    {
        return 'crated.card';
    }

    public function toPrimitives(): array
    {
        return $this->body;
    }
}