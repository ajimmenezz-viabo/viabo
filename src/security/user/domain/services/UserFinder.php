<?php declare(strict_types=1);


namespace Viabo\security\user\domain\services;


use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\exceptions\UserDoesNotExist;
use Viabo\security\user\domain\UserRepository;

final readonly class UserFinder
{
    public function __construct(private UserRepository $repository)
    {
    }

    public function __invoke(UserId $userId): array
    {
        $user = $this->repository->searchId($userId);

        if (empty($user)) {
            throw new UserDoesNotExist('');
        }

        return $user->toArray();
    }
}