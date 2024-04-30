<?php declare(strict_types=1);


namespace Viabo\backoffice\projection\application\create_projection_by_register;


use Viabo\backoffice\projection\domain\CompanyProjection;
use Viabo\backoffice\projection\domain\CompanyProjectionRepository;

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