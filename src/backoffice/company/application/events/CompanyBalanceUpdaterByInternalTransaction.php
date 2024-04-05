<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\events;


use Viabo\backoffice\company\domain\Company;
use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\events\CompanyBalanceUpdatedDomainEventByInternalTransaction;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CompanyBalanceUpdaterByInternalTransaction
{
    public function __construct(
        private CompanyRepository $repository,
        private EventBus          $bus
    )
    {
    }

    public function __invoke(array $transaction): void
    {
        $sourceCompany = $this->repository->searchByBankAccount($transaction['sourceAccount']);
        $destinationCompany = $this->repository->searchByBankAccount($transaction['destinationAccount']);

        $this->decreaseBalance($sourceCompany, $transaction);
        $this->incrementBalance($destinationCompany, $transaction);

        $this->bus->publish(new CompanyBalanceUpdatedDomainEventByInternalTransaction(
            $transaction['id'],
            $transaction
        ));
    }

    private function decreaseBalance(?Company $sourceCompany, array $transaction): void
    {
        if (!empty($sourceCompany)) {
            $sourceCompany->decreaseBalance(
                $transaction['commissions']['total'],
                $transaction['createdByUser'],
                $transaction['createDate']
            );
            $this->repository->update($sourceCompany);
        }
    }

    private function incrementBalance(?Company $destinationCompany, array $transaction): void
    {
        if (!empty($destinationCompany)) {
            $destinationCompany->incrementBalance(
                $transaction['amount'],
                $transaction['createdByUser'],
                $transaction['createDate']
            );
            $this->repository->update($destinationCompany);
        }
    }
}