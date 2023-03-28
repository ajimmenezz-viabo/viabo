<?php declare(strict_types=1);


namespace Viabo\security\code\application\create;


use Viabo\security\code\domain\Code;
use Viabo\security\code\domain\CodeRepository;
use Viabo\security\user\domain\events\LegalRepresentativeCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CodeCreator implements DomainEventSubscriber
{
    public function __construct(private CodeRepository $repository, private EventBus $bus)
    {
    }

    public static function subscribedTo(): array
    {
        return [LegalRepresentativeCreatedDomainEvent::class];
    }

    public function __invoke(LegalRepresentativeCreatedDomainEvent $event): void
    {
        $userId = $event->aggregateId();
        $userData = $event->toPrimitives();

        $code = Code::create($userId , 'verification');
        $code->setEventCreated($userData);
        $this->repository->save($code);

        $this->bus->publish(...$code->pullDomainEvents());
    }
}