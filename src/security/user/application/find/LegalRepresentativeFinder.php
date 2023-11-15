<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


use Viabo\security\shared\domain\user\UserEmail;
use Viabo\security\user\domain\exceptions\UserNotExist;
use Viabo\security\user\domain\UserRepository;

final readonly class LegalRepresentativeFinder
{
    public function __construct(private UserRepository $repository)
    {
    }

    public function __invoke(UserEmail $email): TokenDataResponse
    {
        $user = $this->repository->searchBy($email);

        if (empty($user)) {
            throw new UserNotExist($email->value());
        }

        return new TokenDataResponse($user->tokenData());
    }
}