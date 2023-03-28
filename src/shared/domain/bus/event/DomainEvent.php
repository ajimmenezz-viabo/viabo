<?php declare(strict_types=1);


namespace Viabo\shared\domain\bus\event;


use Viabo\shared\domain\Utils;
use Viabo\shared\domain\valueObjects\UuidValueObject;
use DateTimeImmutable;

abstract readonly class DomainEvent
{
    private string $eventId;
    private string $occurredOn;

    public function __construct(
        private string $modifierId,
        private string $aggregateId,
        string         $eventId = null,
        string         $occurredOn = null
    )
    {
        $this->eventId    = $eventId ?: UuidValueObject::random()->value();
        $this->occurredOn = $occurredOn ?: Utils::dateToString(new DateTimeImmutable());
    }

    abstract public static function fromPrimitives(
        string $modifierId,
        string $aggregateId,
        array $body,
        string $eventId,
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