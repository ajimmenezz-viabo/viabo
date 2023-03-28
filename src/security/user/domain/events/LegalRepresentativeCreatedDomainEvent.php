<?php declare(strict_types=1);


namespace Viabo\security\user\domain\events;


use Viabo\shared\domain\bus\event\DomainEvent;

final readonly class LegalRepresentativeCreatedDomainEvent extends DomainEvent
{
    public function __construct(
        string        $aggregateId ,
        private array $content ,
        string        $eventId = null ,
        string        $occurredOn = null
    )
    {
        parent::__construct('' , $aggregateId);
    }

    public static function fromPrimitives(
        string $modifierId , string $aggregateId , array $body , string $eventId , string $occurredOn
    ): DomainEvent
    {
        return new self($aggregateId , $body , $eventId , $occurredOn);
    }

    public static function eventName(): string
    {
        return 'create.user.legal.representative';
    }

    public function toPrimitives(): array
    {
        return $this->content;
    }
}