<?php declare(strict_types=1);


namespace Viabo\backoffice\users\application\create_users_by_admin_stp;


use Viabo\backoffice\users\domain\CompanyUser;
use Viabo\backoffice\users\domain\CompanyUserRepository;
use Viabo\backoffice\users\domain\events\CompanyUsersCreatedDomainEventByAdminStp;
use Viabo\backoffice\users\domain\services\CompanyUserCreator;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CompanyUsersCreatorByAdminSTP
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
        array_map(function (string $userId) use ($company) {
            $this->creator->__invoke($userId, $company['id'], $company['businessId']);
        }, $company['users']);

        $company['users'] = $this->searchUsers($company['id']);
        $this->bus->publish(new CompanyUsersCreatedDomainEventByAdminStp($company['id'], $company));
    }

    public function searchUsers(string $companyId): array
    {
        $filters = Filters::fromValues([['field' => 'companyId', 'operator' => '=', 'value' => $companyId]]);
        $users = $this->repository->searchCriteria(new Criteria($filters));

        return array_map(function (CompanyUser $user) {
            return $user->toArray();
        }, $users);
    }
}