<?php declare(strict_types=1);


namespace Viabo\business\services\domain\events;


use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class ServiceCreatedDomainEvent extends DomainEvent
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

    public static function fromPrimitives(
        string $modifierId , string $aggregateId , array $body , string $eventId , string $occurredOn
    ): DomainEvent
    {
        return new self($modifierId , $aggregateId , $body , $eventId , $occurredOn);
    }

    public static function eventName(): string
    {
        return 'create.service.by.update.commerce';
    }

    public function toPrimitives(): array
    {
        return $this->body;
    }
}