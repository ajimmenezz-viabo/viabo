<?php declare(strict_types=1);


namespace Viabo\backoffice\services\application\create_stp_card_by_admin_stp;


use Viabo\backoffice\services\domain\events\ServicesCreatedDomainEventByAdminStp;
use Viabo\backoffice\services\domain\new\ServiceFactory;
use Viabo\backoffice\services\domain\new\ServiceRepository;
use Viabo\backoffice\shared\domain\cardCloud\CardCloudRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class StpCardServiceCreatorByAdminStp
{
    public function __construct(
        private ServiceRepository   $repository,
        private CardCloudRepository $cardCloudRepository,
        private EventBus            $bus
    )
    {
    }

    public function __invoke(array $company): void
    {
        $bankAccount = $this->repository->searchAvailableBankAccount($company['businessId']);
        $stpCardCredentials = $this->repository->searchStpCardCredentials($company['businessId']);
        $company['type'] = '5';
        $company['bankAccountId'] = $bankAccount->id();
        $cardCloudResponse = $this->cardCloudRepository->createAccount($company, $stpCardCredentials->toArray());
        $company['serviceCardCloud'] = $cardCloudResponse;
        $service = ServiceFactory::create($company);
        $this->repository->save($service);
        $service = array_merge($service->toArray(), ['bankAccountNumber' => $bankAccount->number()]);
        $company['services'] = [$service];
        $this->bus->publish(new ServicesCreatedDomainEventByAdminStp($company['id'], $company));
    }

}
