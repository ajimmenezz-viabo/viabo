<?php declare(strict_types=1);


namespace Viabo\security\user\domain\events;


use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class SessionStartedDomainEvent extends DomainEvent
{
    public function __construct(
        string $aggregateId ,
        string $modifierId = null ,
        string $eventId = null ,
        string $occurredOn = null
    )
    {
        parent::__construct($aggregateId , $modifierId , $eventId , $occurredOn);
    }

    public static function fromPrimitives(
        string $aggregateId ,
        array  $body ,
        string $modifierId ,
        string $eventId ,
        string $occurredOn
    ): DomainEvent
    {
        return new self($aggregateId , $modifierId , $eventId , $occurredOn);
    }

    public static function eventName(): string
    {
        return 'user.session.started';
    }

    public function toPrimitives(): array
    {
        return [];
    }
}