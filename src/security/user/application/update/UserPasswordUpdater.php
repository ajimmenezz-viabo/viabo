<?php declare(strict_types=1);


namespace Viabo\security\user\application\update;


use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\exceptions\UserPasswordIncorrect;
use Viabo\security\user\domain\UserPassword;
use Viabo\security\user\domain\UserRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class UserPasswordUpdater
{

    public function __construct(
        private UserRepository $repository,
        private EventBus $bus
    )
    {
    }

    public function __invoke(
        string $userId ,
        string $currentPassword ,
        string $newPassword ,
        string $confirmationPassword ,
    ): void
    {
        $user = $this->repository->search(new UserId($userId));

        if ($user->isDifferent(new UserPassword($currentPassword))) {
            throw new UserPasswordIncorrect();
        }

        $password = UserPassword::create($newPassword, $confirmationPassword);
        $user->resetPassword($password);
        $user->setEventRestPassword();

        $this->repository->update($user);

        $this->bus->publish(...$user->pullDomainEvents());
    }
}