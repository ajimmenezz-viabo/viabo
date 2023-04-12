<?php declare(strict_types=1);


namespace Viabo\security\user\application\login;


use Viabo\security\user\domain\exceptions\UserPasswordWrong;
use Viabo\security\user\domain\services\UserNameFinder;
use Viabo\security\user\domain\UserEmail;
use Viabo\security\user\domain\UserPassword;

final readonly class UserLogin
{
    public function __construct(private UserNameFinder $finder)
    {
    }

    public function __invoke(UserEmail $email , UserPassword $passwordEntered): UserLoginResponse
    {
        $user = ($this->finder)($email);

        if($user->isDifferent($passwordEntered)){
            throw new UserPasswordWrong();
        }

        return new UserLoginResponse($user->id());
    }
}