<?php declare(strict_types=1);


namespace Viabo\backoffice\company\domain\services;


use Viabo\backoffice\company\domain\CompanyRepository;

final readonly class CollectionEntityFinder
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function searchCostCenter(array $centerCosts): array
    {
        return array_map(function (string $centerCostsId) {
            return $this->repository->searchCenterCost($centerCostsId);
        }, $centerCosts);
    }

    public function searchUsers(array $users): array
    {
        return array_map(function (string $userId) {
            return $this->repository->searchUser($userId);
        }, $users);
    }

    public function searchAvailableBankAccount(): array
    {
        return [$this->repository->searchAvailableBankAccount()];
    }
}