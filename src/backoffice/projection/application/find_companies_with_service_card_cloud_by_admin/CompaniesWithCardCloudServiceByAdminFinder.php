<?php declare(strict_types=1);

namespace Viabo\backoffice\projection\application\find_companies_with_service_card_cloud_by_admin;

use Viabo\backoffice\company\application\find\CompaniesResponse;
use Viabo\backoffice\projection\domain\CompanyProjection;
use Viabo\backoffice\projection\domain\CompanyProjectionRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final class CompaniesWithCardCloudServiceByAdminFinder
{
    public function __construct(private CompanyProjectionRepository $repository)
    {
    }

    public function __invoke(string $userId, string $businessId, string $profileId): CompaniesResponse
    {
        $filters = [['field' => 'businessId', 'operator' => '=', 'value' => $businessId]];

        $companiesAdminProfileId = '7';
        if ($profileId === $companiesAdminProfileId) {
            $filters[] = ['field' => 'users', 'operator' => 'CONTAINS', 'value' => $userId];
        }

        $filters = Filters::fromValues($filters);
        $companies = $this->repository->searchCriteria(new Criteria($filters));

        $companies = array_values(array_filter($companies, function (CompanyProjection $company) {
            return $company->hasCardCloudService();
        }));

        return new CompaniesResponse(array_map(function (CompanyProjection $company) {
            return $company->cardCloudServiceData();
        }, $companies));
    }
}
