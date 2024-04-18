<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update_projection_services_by_register;


use Viabo\backoffice\company\domain\projection\CompanyProjectionRepository;

final readonly class ProjectionServicesUpdaterByRegisterCompany
{
    public function __construct(private CompanyProjectionRepository $repository)
    {
    }

    public function __invoke(string $companyId, array $services): void
    {
        $projection = $this->repository->search($companyId);

        if (empty($projection)) {
            return;
        }

        $projection->updateServices($services);
        $this->repository->update($projection);
    }
}