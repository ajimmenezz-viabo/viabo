<?php declare(strict_types=1);


namespace Viabo\backoffice\users\application\create;


use Viabo\backoffice\users\domain\CompanyUser;
use Viabo\backoffice\users\domain\CompanyUserRepository;
use Viabo\backoffice\users\domain\events\CompanyUserCreatedDomainEventOnRegisterCompany;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CompanyUserCreatorByRegisterCompany
{
    public function __construct(private CompanyUserRepository $repository, private EventBus $bus)
    {
    }

    public function __invoke(array $company): void
    {
        $user = CompanyUser::create($company);
        $this->repository->save($user);

        $this->bus->publish(new CompanyUserCreatedDomainEventOnRegisterCompany($user->userId(), $user->toArray()));
    }
}