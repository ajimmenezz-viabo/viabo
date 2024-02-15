<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\create;


use Viabo\backoffice\company\domain\Company;
use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\exceptions\CompanyFiscalNameExist;
use Viabo\backoffice\company\domain\exceptions\CompanyRFCExist;
use Viabo\backoffice\company\domain\services\CollectionEntityFinder;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CompanyCreator
{
    public function __construct(
        private CompanyRepository      $repository,
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
        array  $centerCosts
    ): void
    {
        $this->ensureCompany($fiscalName, $rfc);
        $centerCosts = $this->finder->searchCostCenter($centerCosts);
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
            $centerCosts
        );
        $this->repository->save($company);

        $this->bus->publish(...$company->pullDomainEvents());
    }

    private function ensureCompany(string $fiscalName, string $rfc): void
    {
        $filters = Filters::fromValues([['field' => 'fiscalName.value', 'operator' => '=', 'value' => $fiscalName]]);
        $company = $this->repository->searchCriteria(new Criteria($filters));

        if (!empty($company)) {
            throw new CompanyFiscalNameExist();
        }

        $filters = Filters::fromValues([['field' => 'rfc.value', 'operator' => '=', 'value' => $rfc]]);
        $company = $this->repository->searchCriteria(new Criteria($filters));

        if (!empty($company)) {
            throw new CompanyRFCExist();
        }
    }

    public function searchFolioLast(): string
    {
        $company = $this->repository->searchFolioLast();
        return $company->folio();
    }

}