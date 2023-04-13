<?php declare(strict_types=1);


namespace Viabo\security\session\application\create;


use Viabo\security\session\domain\SessionLoginDate;
use Viabo\security\session\domain\SessionUserId;
use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\events\SessionStartedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class SessionStarted implements DomainEventSubscriber
{
    public function __construct(private SessionCreator $creator)
    {
    }

    public static function subscribedTo(): array
    {
        return [SessionStartedDomainEvent::class];
    }

    public function __invoke(SessionStartedDomainEvent $event): void
    {
        $userId = new UserId($event->aggregateId());
        $loginDate = new SessionLoginDate($event->occurredOn());

        $this->creator->__invoke($userId , $loginDate);
    }
}