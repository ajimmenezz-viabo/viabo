<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\create;


use Viabo\business\commerce\domain\CommerceLegalRepresentative;
use Viabo\business\commerce\domain\CommerceRegisterStep;
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
        $legalRepresentative = new CommerceLegalRepresentative($event->aggregateId());
        $registerStatus = new CommerceRegisterStep('1');

        ($this->creator)($legalRepresentative , $registerStatus);
    }
}