<?php declare(strict_types=1);


namespace Viabo\backoffice\users\application\create_users_by_admin_stp;


use Viabo\backoffice\users\domain\CompanyUser;
use Viabo\backoffice\users\domain\CompanyUserRepository;
use Viabo\backoffice\users\domain\events\CompanyUsersCreatedDomainEventByAdminStp;
use Viabo\security\user\application\find_user\UserQuery;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\bus\query\QueryBus;

final readonly class CompanyUsersCreatorByAdminSTP
{
    public function __construct(
        private CompanyUserRepository $repository,
        private QueryBus $queryBus,
        private EventBus $bus
    )
    {
    }

    public function __invoke(array $company): void
    {
        $company['users'] = array_map(function (string $userId) use ($company){
            $user = $this->queryBus->ask(new UserQuery($userId, $company['businessId']));
            $user = CompanyUser::create(
                $user->data['id'],
                $company['id'],
                $user->data['profile'],
                $user->data['name'],
                $user->data['lastname'],
                $user->data['email'],
                $user->data['register']
            );
            $this->repository->save($user);

            return $user->toArray();
        }, $company['users']);

        $this->bus->publish(new CompanyUsersCreatedDomainEventByAdminStp($company['id'], $company));
    }
}