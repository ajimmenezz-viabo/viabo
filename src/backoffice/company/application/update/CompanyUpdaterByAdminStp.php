<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\exceptions\CompanyNotExist;
use Viabo\backoffice\company\domain\services\CollectionEntityFinder;
use Viabo\backoffice\company\domain\services\CompanyValidator;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CompanyUpdaterByAdminStp
{
    public function __construct(
        private CompanyRepository      $repository,
        private CompanyValidator       $validator,
        private CollectionEntityFinder $finder,
        private EventBus               $bus
    )
    {
    }

    public function __invoke(
        string $userId,
        string $companyId,
        string $fiscalName,
        string $commercialName,
        array  $users,
        array  $costCenters
    ): void
    {
        $this->validator->ensureFiscalName($fiscalName, $companyId);
        $users = $this->finder->searchUsers($users);
        $costCenters = $this->finder->searchCostCenter($costCenters);

        $company = $this->repository->search($companyId);

        if (empty($company)) {
            throw new CompanyNotExist();
        }

        $company->updateByAdminStp(
            $userId,
            $fiscalName,
            $commercialName,
            $users,
            $costCenters
        );

        $this->repository->update($company);

        $this->bus->publish(...$company->pullDomainEvents());
    }
}