<?php declare(strict_types=1);

namespace Viabo\backoffice\services\application\create_card_cloud_service_by_admin_stp;

use Viabo\backoffice\services\domain\events\ServicesCreatedDomainEventByAdminStp;
use Viabo\backoffice\services\domain\new\Service;
use Viabo\backoffice\services\domain\new\ServiceRepository;
use Viabo\backoffice\services\domain\services\create_card_cloud\CardCloudServiceCreator;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final class CardCloudServiceCreatorByAdminStp
{
    public function __construct(
        private ServiceRepository       $repository,
        private CardCloudServiceCreator $cardCloudServiceCreator,
        private EventBus                $bus
    )
    {
    }

    public function __invoke(array $company): void
    {
        $services = $this->searchServices($company['id']);
        if (count($services) > 0 && count($services) < 2) {
            $cardCloud = $this->cardCloudServiceCreator->__invoke($company);
            $company['services'] = array_merge($this->getServices($services), [$cardCloud]);
            $this->bus->publish(new ServicesCreatedDomainEventByAdminStp($company['id'], $company));
        }
    }

    public function searchServices(string $companyId): array
    {
        $filters = Filters::fromValues([['field' => 'companyId', 'operator' => '=', 'value' => $companyId]]);
        return $this->repository->searchCriteria(new Criteria($filters));
    }

    public function getServices(array $services): array
    {
        return array_map(function (Service $service) {
            return $service->toArray();
        }, $services);
    }
}
