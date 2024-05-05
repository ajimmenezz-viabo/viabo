<?php declare(strict_types=1);


namespace Viabo\security\user\application\find_user;


use Viabo\security\user\application\find\UserResponse;
use Viabo\security\user\domain\exceptions\UserNotExist;
use Viabo\security\user\domain\UserRepository;

final readonly class UserFinder
{
    public function __construct(private UserRepository $repository)
    {
    }

    public function __invoke(string $userId, string $businessId): UserResponse
    {
        $user = $this->repository->search($userId, $businessId);

        if(empty($user)){
            throw new UserNotExist();
        }

        return new UserResponse($user->toArray());
    }
}