<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update_projection_by_register;


use Viabo\backoffice\company\domain\projection\CompanyProjectionRepository;

final readonly class ProjectionUpdaterByRegisterCompany
{
    public function __construct(private CompanyProjectionRepository $repository)
    {
    }

    public function __invoke(array $company): void
    {
        $projection = $this->repository->search($company['id']);
        $projection->update(
            $company['fiscalPersonType'],
            $company['fiscalName'],
            $company['tradeName'],
            $company['rfc'],
            $company['registerStep']
        );
        $this->repository->update($projection);
    }
}