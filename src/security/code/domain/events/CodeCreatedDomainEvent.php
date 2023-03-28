<?php declare(strict_types=1);


namespace Viabo\security\code\domain\events;


use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class CodeCreatedDomainEvent extends DomainEvent
{
    private array $content;

    public function __construct(
        string $aggregateId ,
        array  $userData ,
        string $eventId = null ,
        string $occurredOn = null
    )
    {
        parent::__construct('' , $aggregateId);
        $this->content = $userData;
    }

    public static function fromPrimitives(string $modifierId , string $aggregateId , array $body , string $eventId , string $occurredOn): DomainEvent
    {
        return new self($aggregateId , $body , $eventId , $occurredOn);
    }

    public static function eventName(): string
    {
        return 'create.code.verification';
    }

    public function toPrimitives(): array
    {
        return $this->content;
    }
}