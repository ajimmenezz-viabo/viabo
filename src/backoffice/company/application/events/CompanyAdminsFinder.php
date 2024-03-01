<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\events;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\events\CompanyAdminsFoundDomainEvent;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CompanyAdminsFinder
{
    public function __construct(private CompanyRepository $repository, private EventBus $bus)
    {
    }

    public function __invoke(array $transaction): void
    {
        $company = $this->repository->searchByBankAccount($transaction['destinationAccount']);

        if (empty($company)) {
            return;
        }

        $company = $company->toArray();
        $company['transaction'] = $transaction;
        $this->bus->publish(new CompanyAdminsFoundDomainEvent($company['id'], $company));
    }
}