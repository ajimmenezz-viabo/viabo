<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


use Viabo\security\shared\domain\user\UserEmail;
use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\services\UserFinder as UserFinderService;

final readonly class UserFinder
{

    public function __construct(private UserFinderService $finder)
    {
    }

    public function __invoke(UserId $userId , UserEmail $username): UserResponse
    {
        $user = $this->finder->__invoke($userId , $username);
        return new UserResponse($user->toArray());
    }
}