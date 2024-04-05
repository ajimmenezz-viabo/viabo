<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\events;


use Viabo\backoffice\company\domain\CompanyRepository;

final readonly class CompanyBalanceUpdaterByExternalTransaction
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function __invoke(array $transaction): void
    {
        $sourceCompany = $this->repository->searchByBankAccount($transaction['sourceAccount']);

        if (empty($sourceCompany)) {
            return;
        }

        $sourceCompany->decreaseBalance(
            $transaction['commissions']['total'],
            $transaction['createdByUser'],
            $transaction['createDate']
        );
        $this->repository->update($sourceCompany);
    }

}