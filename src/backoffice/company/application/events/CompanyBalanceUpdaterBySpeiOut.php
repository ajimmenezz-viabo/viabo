<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\events;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CompanyBalanceUpdaterBySpeiOut
{
    public function __construct(
        private CompanyRepository $repository,
        private EventBus          $bus
    )
    {
    }

    public function __invoke(array $transaction): void
    {

        $company = $this->repository->searchByBankAccount($transaction['sourceAccount']);

        if (empty($company)) {
            return;
        }

        $company->decreaseBalance($transaction['amount']);
        $company->setEventBalanceDecreased($transaction);
        $this->repository->update($company);

        $this->bus->publish(...$company->pullDomainEvents());
    }
}