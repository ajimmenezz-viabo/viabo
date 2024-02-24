<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\events;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CompanyBalanceUpdater
{
    public function __construct(
        private CompanyRepository $repository,
        private EventBus          $bus
    )
    {
    }

    public function __invoke(string $bankAccount, float $amount): void
    {
        $company = $this->repository->searchByBankAccount($bankAccount);

        if (empty($company)) {
            return;
        }

        $company->addBalance($amount);
        $this->repository->update($company);

        $this->bus->publish(...$company->pullDomainEvents());
    }
}