<?php declare(strict_types=1);


namespace Viabo\security\user\application\login;


use Viabo\security\user\domain\exceptions\UserPasswordWrong;
use Viabo\security\user\domain\services\UserNameFinder;
use Viabo\security\user\domain\UserEmail;
use Viabo\security\user\domain\UserPassword;
use Viabo\security\user\domain\UserRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class UserLogin
{
    public function __construct(
        private UserRepository $repository,
        private UserNameFinder $finder ,
        private EventBus $bus
    )
    {
    }

    public function __invoke(UserEmail $email , UserPassword $passwordEntered): UserLoginResponse
    {
        $user = ($this->finder)($email);

        if ($user->isDifferent($passwordEntered)) {
            throw new UserPasswordWrong();
        }

        $userView = $this->repository->searchView($user->id());

        $user->setEventSessionStarted();
        $this->bus->publish(...$user->pullDomainEvents());
        return new UserLoginResponse($userView->tokenData());
    }
}