<?php declare(strict_types=1);


namespace Viabo\security\code\domain\events;


use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class CodeCreatedDomainEvent extends DomainEvent
{
    private array $body;

    public function __construct(
        string $aggregateId ,
        array  $body ,
        string $modifierId = null ,
        string $eventId = null ,
        string $occurredOn = null
    )
    {
        parent::__construct($aggregateId , $modifierId , $eventId , $occurredOn);
        $this->body = $body;
    }

    public static function fromPrimitives(
        string $aggregateId ,
        array  $body ,
        string $modifierId ,
        string $eventId ,
        string $occurredOn
    ): DomainEvent
    {
        return new self($aggregateId , $body , $eventId , $occurredOn);
    }

    public static function eventName(): string
    {
        return 'create.code.verification';
    }

    public function toPrimitives(): array
    {
        return $this->body;
    }
}