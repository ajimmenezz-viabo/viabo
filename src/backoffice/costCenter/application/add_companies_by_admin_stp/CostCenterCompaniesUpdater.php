<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\application\add_companies_by_admin_stp;


use Viabo\backoffice\costCenter\domain\CostCenterRepository;

final readonly class CostCenterCompaniesUpdater
{
    public function __construct(private CostCenterRepository $repository)
    {
    }

    public function __invoke(array $company): void
    {
        $companyId = $company['id'];
        array_map(function (string $costCenter) use ($companyId){
            $costCenter = $this->repository->search($costCenter);
            $costCenter->addCompany($companyId);
            $this->repository->update($costCenter);
        }, $company['costCenters']);
    }
}