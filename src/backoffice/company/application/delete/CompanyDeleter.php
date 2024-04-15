<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\delete;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\events\CompanyDeletedDomainEvent;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CompanyDeleter
{
    public function __construct(
        private CompanyRepository $repository,
        private EventBus          $bus
    )
    {
    }

    public function __invoke(string $companyId): void
    {
        $company = $this->repository->search($companyId, false);
        if (!empty($company)) {
            $this->repository->delete($company);
            $this->bus->publish(new CompanyDeletedDomainEvent($company->id(), $company->toArray()));
        }
    }
}