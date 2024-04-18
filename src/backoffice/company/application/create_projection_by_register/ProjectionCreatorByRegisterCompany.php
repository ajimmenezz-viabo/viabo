<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\create_projection_by_register;


use Viabo\backoffice\company\domain\projection\CompanyProjection;
use Viabo\backoffice\company\domain\projection\CompanyProjectionRepository;

final readonly class ProjectionCreatorByRegisterCompany
{
    public function __construct(private CompanyProjectionRepository $repository)
    {
    }

    public function __invoke(array $company): void
    {
        $projection = CompanyProjection::create($company);
        $this->repository->save($projection);
    }
}