<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update_projection_users_by_register;


use Viabo\backoffice\company\domain\CompanyRepository;

final readonly class ProjectionUsersUpdaterByRegisterCompany
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function __invoke(array $user): void
    {
        $projection = $this->repository->search($user['companyId'], true);

        if (empty($projection)) {
            return;
        }
        $projection->updateUsers([$user]);
        $this->repository->update($projection);
    }
}