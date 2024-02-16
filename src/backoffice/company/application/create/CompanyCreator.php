<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\create;


use Viabo\backoffice\company\domain\Company;
use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\services\CollectionEntityFinder;
use Viabo\backoffice\company\domain\services\CompanyValidator;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CompanyCreator
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
        string $rfc,
        array  $users,
        array  $costCenters
    ): void
    {
        $this->validator->ensureCompany($fiscalName, $rfc);
        $costCenters = $this->finder->searchCostCenter($costCenters);
        $users = $this->finder->searchUsers($users);
        $bankAccount = $this->finder->searchAvailableBankAccount();
        $folio = $this->searchFolioLast();

        $company = Company::createByStp(
            $userId,
            $companyId,
            $folio,
            $fiscalName,
            $commercialName,
            $rfc,
            $bankAccount,
            $users,
            $costCenters
        );
        $this->repository->save($company);

        $this->bus->publish(...$company->pullDomainEvents());
    }

    public function searchFolioLast(): string
    {
        $company = $this->repository->searchFolioLast();
        return $company->folio();
    }

}