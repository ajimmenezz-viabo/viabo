<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain\events;


use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class CommercePayCreatedDomainEvent extends DomainEvent
{
    public function __construct(
        string        $aggregateId,
        private array $body ,
        private string $email,
        string        $modifierId = null ,
        string        $eventId = null ,
        string        $occurredOn = null
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
        return new self($aggregateId , $body , $modifierId , $eventId , $occurredOn);
    }

    public static function eventName(): string
    {
        return 'created.commerce.pay';
    }

    public function toPrimitives(): array
    {
        return $this->body;
    }

    public function email(): string
    {
        return $this->email;
    }
}