<?php declare(strict_types=1);


namespace Viabo\security\user\domain\events;


use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class LegalRepresentativeCreatedDomainEvent extends DomainEvent
{
    public function __construct(
        string        $modifierId ,
        string        $aggregateId ,
        private array $content ,
        string        $eventId = null ,
        string        $occurredOn = null
    )
    {
        parent::__construct($modifierId , $aggregateId , $eventId , $occurredOn);
    }

    public static function fromPrimitives(
        string $modifierId , string $aggregateId , array $body , string $eventId , string $occurredOn
    ): DomainEvent
    {
        return new self($modifierId , $aggregateId , $body , $eventId , $occurredOn);
    }

    public static function eventName(): string
    {
        return 'create.user';
    }

    public function toPrimitives(): array
    {
        return $this->content;
    }
}