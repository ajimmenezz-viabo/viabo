<?php declare(strict_types=1);


namespace Viabo\security\user\application\create;


use Viabo\security\shared\domain\user\UserEmail;
use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\services\UserFinder;
use Viabo\security\user\domain\User;
use Viabo\security\user\domain\UserName;
use Viabo\security\user\domain\UserPhone;
use Viabo\security\user\domain\UserRepository;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\DomainError;

final readonly class UserCreator
{
    public function __construct(
        private UserRepository $repository ,
        private UserFinder     $finder ,
        private EventBus       $bus
    )
    {
    }

    public function __invoke(UserName $name , UserEmail $email , UserPhone $phone): void
    {
        $user = $this->searchUser($email);

        if (!empty($user)) {
            return;
        }

        $user = User::create($name , $email , $phone);

        $this->repository->save($user);

        $this->bus->publish(...$user->pullDomainEvents());
    }

    private function searchUser(UserEmail $email): User|null
    {
        try {
            return $this->finder->__invoke(UserId::empty() , $email);
        } catch (DomainError) {
            return null;
        }
    }
}