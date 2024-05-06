<?php declare(strict_types=1);


namespace Viabo\backoffice\commission\application\update_commissions_by_admin_stp;


use Viabo\backoffice\commission\domain\CommissionRepository;
use Viabo\backoffice\commission\domain\events\CommissionSpeiUpdatedDomainEventByAdminStp;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommissionSpeiUpdater
{
    public function __construct(
        private CommissionRepository $repository,
        private EventBus             $bus
    )
    {
    }

    public function __invoke(array $company): void
    {
        $commission = $this->repository->search($company['id']);
        $commission->update($company);
        $this->repository->update($commission);

        $company['commissions'] = [$commission->toArray()];
        $this->bus->publish(new CommissionSpeiUpdatedDomainEventByAdminStp($company['id'], $company));
    }
}