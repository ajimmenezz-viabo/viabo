<?php declare(strict_types=1);


namespace Viabo\backoffice\users\application\update_users_by_admin_stp;


use Viabo\backoffice\users\domain\CompanyUser;
use Viabo\backoffice\users\domain\CompanyUserRepository;
use Viabo\backoffice\users\domain\events\CompanyUsersUpdatedDomainEventByAdminStp;
use Viabo\backoffice\users\domain\services\CompanyUserCreator;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CompanyUsersUpdaterByAdminSTP
{
    public function __construct(
        private CompanyUserRepository $repository,
        private CompanyUserCreator    $creator,
        private EventBus              $bus
    )
    {
    }

    public function __invoke(array $company): void
    {
        $this->deleteCompanyUsers($company['id']);
        $company['users'] = array_map(function (string $userId) use ($company) {
            $user = $this->creator->__invoke($userId, $company['id'], $company['businessId']);
            return $user->toArray();
        }, $company['users']);

        $this->bus->publish(new CompanyUsersUpdatedDomainEventByAdminStp($company['id'], $company));
    }

    private function deleteCompanyUsers(string $companyId): void
    {
        $filters = Filters::fromValues([['field' => 'companyId', 'operator' => '=', 'value' => $companyId]]);
        $companyUsers = $this->repository->searchCriteria(new Criteria($filters));

        array_map(function (CompanyUser $user) {
            $this->repository->delete($user);
        }, $companyUsers);
    }

}