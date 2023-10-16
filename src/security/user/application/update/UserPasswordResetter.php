<?php declare(strict_types=1);


namespace Viabo\security\user\application\update;


use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\services\UserPasswordUpdater;
use Viabo\security\user\domain\UserPassword;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class UserPasswordResetter
{
    public function __construct(
        private UserPasswordUpdater $updater ,
        private EventBus            $bus
    )
    {
    }

    public function __invoke(string $userId): void
    {
        $user = $this->updater->__invoke(UserId::create($userId) , UserPassword::random());
        $user->setEventRestPassword();

        $this->bus->publish(...$user->pullDomainEvents());
    }
}