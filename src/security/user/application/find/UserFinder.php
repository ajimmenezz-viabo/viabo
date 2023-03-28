<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


use Viabo\security\user\domain\UserEmail;
use Viabo\security\user\domain\exceptions\UserDoesNotExist;
use Viabo\security\user\domain\User;
use Viabo\security\user\domain\UserRepository;

final class UserFinder
{
    private UserRepository $repository;

    public function __construct(UserRepository $repository)
    {
        $this->repository = $repository;
    }

    public function __invoke(UserFinderRequest $request): User
    {
        $user = $this->repository->search(new UserEmail($request->getUserId()));

        if(empty($user)){
            throw new UserDoesNotExist($request->getUserId());
        }

        return $user;
    }
}