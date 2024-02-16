<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\create;


use Viabo\security\user\domain\events\LegalRepresentativeCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class CreateCommerceByLegalRepresentativeCreated implements DomainEventSubscriber
{
    public function __construct(private CommerceCreator $creator)
    {
    }

    public static function subscribedTo(): array
    {
        return [LegalRepresentativeCreatedDomainEvent::class];
    }

    public function __invoke(LegalRepresentativeCreatedDomainEvent $event): void
    {
        $this->creator->__invoke($event->aggregateId());
    }
}