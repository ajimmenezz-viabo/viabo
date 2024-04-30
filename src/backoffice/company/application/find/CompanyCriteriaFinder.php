<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\backoffice\projection\domain\CompanyProjection;
use Viabo\backoffice\projection\domain\CompanyProjectionRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CompanyCriteriaFinder
{
    public function __construct(private CompanyProjectionRepository $repository)
    {
    }

    public function __invoke(array $filters): CompanyResponse
    {
        $filters = Filters::fromValues($filters);
        $companies = $this->repository->searchCriteria(new Criteria($filters));
        return new CompanyResponse(array_map(function (CompanyProjection $company){
            return $company->toArray();
        }, $companies));
    }
}