<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


use Viabo\security\user\domain\UserEmail;
use Viabo\security\user\domain\exceptions\UserDoesNotExist;
use Viabo\security\user\domain\UserRepository;

final readonly class LegalRepresentativeFinder
{
    public function __construct(private UserRepository $repository)
    {
    }

    public function __invoke(UserEmail $email): TokenDataResponse
    {
        $user = $this->repository->search($email);

        if (empty($user)) {
            throw new UserDoesNotExist($email->value());
        }

        return new TokenDataResponse($user->tokenData());
    }
}