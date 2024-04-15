<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\exceptions\CompanyNotExist;
use Viabo\backoffice\company\domain\services\CollectionEntityFinder;

final readonly class UserCompanyAdder
{
    public function __construct(
        private CompanyRepository      $repository,
        private CollectionEntityFinder $finder
    )
    {
    }

    public function __invoke(string $companyId, array $users): void
    {
        $company = $this->repository->search($companyId, false);

        if (empty($company)) {
            throw new CompanyNotExist();
        }

        $users = $this->finder->searchUsers($users);
        $company->setUsers($users);

        $this->repository->update($company);
    }
}