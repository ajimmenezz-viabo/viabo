<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain\events;

use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class CommercePayVirtualTerminalCreatedDomainEvent extends DomainEvent
{
    public function __construct(
        string        $aggregateId,
        private array $body ,
        private array $transactionData,
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
        return new self($aggregateId , $body,[], $modifierId , $eventId , $occurredOn);
    }

    public static function eventName(): string
    {
        return 'created.commerce.virtual.terminal.pay';
    }

    public function toPrimitives(): array
    {
        return $this->body;
    }

    public function transactionData(): array
    {
        return $this->transactionData;
    }

}
