<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\backoffice\company\domain\Company;
use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class BalanceCompaniesFinderByStpAccount
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function __invoke(string $stpAccountId): CompanyResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'stpAccountId.value' , 'operator' => '=' , 'value' => $stpAccountId ]
        ]);

        $companies = $this->repository->searchCriteria(new Criteria($filters));
        $balanceCompanies = array_sum(array_map(function (Company $company) {
            return $company->balance();
        }, $companies));
        return new CompanyResponse(['balance' => $balanceCompanies]);
    }
}