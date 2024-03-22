<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\exceptions\CompanyBankAccountEmpty;

final readonly class CompanyFinderByBankAccount
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function __invoke(string $bankAccount): CompanyResponse
    {
        $company = $this->repository->searchByBankAccount($bankAccount);

        if (empty($company)) {
            throw new CompanyBankAccountEmpty($bankAccount);
        }

        return new CompanyResponse($company->toArray());
    }
}