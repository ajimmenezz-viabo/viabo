<?php declare(strict_types=1);


namespace Viabo\backoffice\company\domain\services;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\exceptions\CompanyFiscalNameExist;
use Viabo\backoffice\company\domain\exceptions\CompanyRFCExist;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CompanyValidator
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function ensureCompany(string $fiscalName, string $rfc): void
    {
        $this->ensureFiscalName($fiscalName);
        $this->ensureRfc($rfc);
    }

    public function ensureFiscalName(string $fiscalName, string $companyId = ''): void
    {
        $filter = [['field' => 'fiscalName.value', 'operator' => '=', 'value' => $fiscalName]];
        if (!empty($companyId)) {
            $filter[] = ['field' => 'id', 'operator' => '<>', 'value' => $companyId];
        }

        $filters = Filters::fromValues($filter);
        $company = $this->repository->searchCriteria(new Criteria($filters));

        if (!empty($company)) {
            throw new CompanyFiscalNameExist();
        }
    }

    public function ensureRfc(string $rfc): void
    {
        $filters = Filters::fromValues([['field' => 'rfc.value', 'operator' => '=', 'value' => $rfc]]);
        $company = $this->repository->searchCriteria(new Criteria($filters));

        if (!empty($company)) {
            throw new CompanyRFCExist();
        }
    }
}