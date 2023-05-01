<?php declare(strict_types=1);


namespace Viabo\shared\domain\bus\event;


use Viabo\shared\domain\utils\DatePHP;
use Viabo\shared\domain\valueObjects\UuidValueObject;

abstract readonly class DomainEvent
{
    private string $eventId;
    private string $occurredOn;
    private ?string $modifierId;

    public function __construct(
        private string $aggregateId ,
        string         $modifierId = null ,
        string         $eventId = null ,
        string         $occurredOn = null
    )
    {
        $date = new DatePHP();
        $this->eventId = $eventId ?: UuidValueObject::random()->value();
        $this->occurredOn = $occurredOn ?: $date->dateTime();
        $this->modifierId = $modifierId;
    }

    abstract public static function fromPrimitives(
        string $aggregateId ,
        array  $body ,
        string $modifierId ,
        string $eventId ,
        string $occurredOn
    ): self;

    abstract public static function eventName(): string;

    abstract public function toPrimitives(): array;

    public function aggregateId(): string
    {
        return $this->aggregateId;
    }

    public function eventId(): string
    {
        return $this->eventId;
    }

    public function occurredOn(): string
    {
        return $this->occurredOn;
    }

    public function modifierId(): string
    {
        return $this->modifierId;
    }

}