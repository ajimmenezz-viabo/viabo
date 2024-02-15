<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\CompanyView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CommercesFinder
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function __invoke(string $userProfileId): CommercesResponse
    {
        $filters = Filters::fromValues([]);
        $companies = $this->repository->searchViewCriteria(new Criteria($filters));

        $administratorStpProfile = '5';
        if ($userProfileId === $administratorStpProfile) {
            $companies = array_values(array_filter($companies, function (CompanyView $company) {
                return $company->hasServiceSpei();
            }));
        }

        return new CommercesResponse(array_map(function (CompanyView $company) {
            return $company->toArray();
        }, $companies));
    }
}