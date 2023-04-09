<?php declare(strict_types=1);


namespace Viabo\security\code\application\create;


use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\events\LegalRepresentativeCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class CreateCodeByLegalRepresentativeCreated implements DomainEventSubscriber
{
    public function __construct(private CodeCreator $creator)
    {
    }

    public static function subscribedTo(): array
    {
        return [LegalRepresentativeCreatedDomainEvent::class];
    }

    public function __invoke(LegalRepresentativeCreatedDomainEvent $event): void
    {
        $userId = new UserId($event->aggregateId());
        $userData = $event->toPrimitives();

        ($this->creator)($userId , $userData);
    }
}