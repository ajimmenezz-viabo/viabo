<?php declare(strict_types=1);


namespace Viabo\security\user\domain\services;


use Viabo\security\user\domain\exceptions\UserExist;
use Viabo\security\user\domain\UserRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class UserValidator
{
    public function __construct(private UserRepository $repository)
    {
    }

    public function validateNotExist(string $email): void
    {
        $filters = Filters::fromValues([
            ['field' => 'email', 'operator' => '=', 'value' => $email]
        ]);

        $user = $this->repository->searchCriteria(new Criteria($filters));

        if (!empty($user)) {
            throw new UserExist();
        }
    }
}