<?php declare(strict_types=1);


namespace Viabo\security\user\domain\services;


use Viabo\security\user\domain\exceptions\UserDoesNotExist;
use Viabo\security\user\domain\exceptions\UserWrong;
use Viabo\security\user\domain\User;
use Viabo\security\user\domain\UserEmail;
use Viabo\security\user\domain\UserRepository;

final readonly class UserNameFinder
{

    public function __construct(private UserRepository $repository)
    {
    }

    public function __invoke(UserEmail $email): User
    {
        $user = $this->repository->search($email);

        if (empty($user)) {
            throw new UserWrong();
        }

        return $user;
    }
}