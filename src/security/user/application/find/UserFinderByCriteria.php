<?php declare(strict_types=1);


namespace Viabo\security\user\application\find;


use Viabo\security\user\domain\services\UserFinderByCriteria as UserFinderByCriteriaService;

final readonly class UserFinderByCriteria
{
    public function __construct(private UserFinderByCriteriaService $finder)
    {
    }

    public function __invoke(array $filters, bool $searchByView = false): UserResponse
    {
        $user = !$searchByView ? $this->finder->__invoke($filters) : $this->finder->view($filters);
        return new UserResponse($user->toArray());
    }
}