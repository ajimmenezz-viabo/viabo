<?php declare(strict_types=1);


namespace Viabo\backoffice\services\application\create_services_by_admin_stp;


use Viabo\backoffice\services\domain\events\ServicesCreatedDomainEventByAdminStp;
use Viabo\backoffice\services\domain\events\ServicesCreatedDomainEventByRegisterCompany;
use Viabo\backoffice\services\domain\new\ServiceFactory;
use Viabo\backoffice\services\domain\new\ServiceRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class ServicesCreatorByAdminStp
{
    public function __construct(
        private ServiceRepository $repository,
        private EventBus          $bus
    )
    {
    }

    public function __invoke(array $company): void
    {
        $bankAccount = $this->repository->searchAvailableBankAccount();
        $company['type'] = '4';
        $company['bankAccountId'] = $bankAccount->id();
        $service = ServiceFactory::create($company);
        $this->repository->save($service);

        $company['services'] = [$service->toArray()];
        $this->bus->publish(new ServicesCreatedDomainEventByAdminStp($company['id'], $company));
    }

}