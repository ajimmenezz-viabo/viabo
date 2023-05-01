<?php declare(strict_types=1);


namespace Viabo\security\session\domain\events;


use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class LogoutDomainEvent extends DomainEvent
{
    public function __construct(
        string $aggregateId ,
        string $occurredOn ,
        string $modifierId = null ,
        string $eventId = null
    )
    {
        parent::__construct($aggregateId , $modifierId , $eventId , $occurredOn);
    }

    public static function fromPrimitives(string $aggregateId , array $body , string $modifierId , string $eventId , string $occurredOn): DomainEvent
    {
        return new self($aggregateId , $occurredOn , $modifierId , $eventId);
    }

    public static function eventName(): string
    {
        return 'user.session.logout';
    }

    public function toPrimitives(): array
    {
        return [];
    }
}