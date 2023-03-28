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

    public function __invoke(LegalRepresentativeFinderRequest $request): string
    {
        $user = $this->repository->search(new UserEmail($request->getUsername()));

        if(empty($user)){
            throw new UserDoesNotExist($request->getUsername());
        }

        return $user->id();
    }
}