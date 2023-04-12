<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


use Viabo\security\user\domain\services\UserNameFinder;
use Viabo\security\user\domain\UserEmail;
use Viabo\security\user\domain\User;

final readonly class UserFinder
{

    public function __construct(private UserNameFinder $finder)
    {
    }

    public function __invoke(UserFinderRequest $request): User
    {
        return ($this->finder)(new UserEmail($request->getUserId()));
    }
}