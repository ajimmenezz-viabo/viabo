<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\projection\CompanyProjection;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CompaniesFinder
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function __invoke(string $userProfileId): CompaniesResponse
    {
        $filters = Filters::fromValues([]);
        $companies = $this->repository->searchViewCriteria(new Criteria($filters));

        $administratorStpProfile = '5';
        if ($userProfileId === $administratorStpProfile) {
            $companies = array_values(array_filter($companies, function (CompanyProjection $company) {
                return $company->hasServiceSpei();
            }));
        }

        return new CompaniesResponse(array_map(function (CompanyProjection $company) {
            return $company->toArray();
        }, $companies));
    }
}