<?php declare(strict_types=1);


namespace Viabo\backoffice\users\application\assign_user_in_company;


use Viabo\backoffice\company\domain\exceptions\CompanyNotExist;
use Viabo\backoffice\users\domain\CompanyUser;
use Viabo\backoffice\users\domain\CompanyUserRepository;
use Viabo\security\user\application\find_user\UserQuery;
use Viabo\shared\domain\bus\query\QueryBus;

final readonly class CompanyUserAssigner
{
    public function __construct(
        private CompanyUserRepository $repository,
        private QueryBus              $queryBus
    )
    {
    }

    public function __invoke(string $businessId, string $companyId, string $userId): void
    {
        $this->ensureCompany($companyId);
        $user = $this->searchUser($businessId, $userId);

        $user = CompanyUser::create(
            $userId,
            $companyId,
            $user['profile'],
            $user['name'],
            $user['lastname'],
            $user['email'],
            $user['register']
        );

        $this->repository->save($user);
    }

    private function ensureCompany(string $companyId): void
    {
        $company = $this->repository->search($companyId);
        if (empty($company)) {
            throw new CompanyNotExist();
        }
    }

    private function searchUser(string $businessId, string $userId): array
    {
        $user = $this->queryBus->ask(new UserQuery($userId, $businessId));
        return $user->data;
    }
}