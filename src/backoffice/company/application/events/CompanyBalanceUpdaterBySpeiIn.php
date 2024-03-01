<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\events;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CompanyBalanceUpdaterBySpeiIn
{
    public function __construct(
        private CompanyRepository $repository,
        private EventBus          $bus
    )
    {
    }

    public function __invoke(array $transaction): void
    {
        $company = $this->repository->searchByBankAccount($transaction['destinationAccount']);

        if (empty($company)) {
            return;
        }

        $company->addBalance($transaction['amount']);
        $company->setEventBalanceIncreased($transaction);
        $this->repository->update($company);

        $this->bus->publish(...$company->pullDomainEvents());
    }
}