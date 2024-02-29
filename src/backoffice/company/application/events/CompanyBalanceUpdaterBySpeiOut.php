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

    public function __invoke(
        string $sourceAccount,
        string $destinationAccount,
        string $liquidationDate,
        float  $amount
    ): void
    {
        $company = $this->repository->searchByBankAccount($sourceAccount);

        if (empty($company)) {
            return;
        }

        $company->decreaseBalance($amount);
        $company->setEventBalanceDecreased($destinationAccount, $liquidationDate);
        $this->repository->update($company);

        $this->bus->publish(...$company->pullDomainEvents());
    }
}