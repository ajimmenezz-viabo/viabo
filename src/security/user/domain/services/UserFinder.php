<?php declare(strict_types=1);


namespace Viabo\security\user\domain\services;


use Viabo\security\shared\domain\user\UserEmail;
use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\exceptions\UserNotExist;
use Viabo\security\user\domain\User;
use Viabo\security\user\domain\UserRepository;

final readonly class UserFinder
{
    public function __construct(private UserRepository $repository)
    {
    }

    public function __invoke(UserId $userId , UserEmail $userEmail): User
    {
        $user = null;
        if ($userId->isNotEmpty()) {
            $user = $this->repository->search($userId);
        }

        if ($userEmail->isNotEmpty()) {
            $user = $this->repository->searchBy($userEmail);
        }

        if (empty($user)) {
            throw new UserNotExist('');
        }

        return $user;
    }
}