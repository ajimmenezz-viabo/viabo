<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\application\events;


use Viabo\backoffice\costCenter\domain\CostCenterRepository;
use Viabo\backoffice\costCenter\domain\events\CostCenterAdminsEmailsDomainEvent;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\Utils;

final readonly class CostCenterAdminsFinderByCompany
{
    public function __construct(private CostCenterRepository $repository, private EventBus $bus)
    {
    }

    public function __invoke(array $company): void
    {
        if (empty($company['costCenters'])) {
            return;
        }

        $costCenters = array_map(function (array $costCenter) {
            return $this->repository->search($costCenter['id']);
        }, $company['costCenters']);

        $adminsEmails = [];
        foreach ($costCenters as $costCenter) {
            $adminsEmails = array_merge($adminsEmails, $costCenter->usersEmails());
        }
        $company['costCentersAdminsEmails'] = Utils::removeDuplicateElements($adminsEmails);

        $this->bus->publish(new CostCenterAdminsEmailsDomainEvent($company['id'], $company));
    }
}