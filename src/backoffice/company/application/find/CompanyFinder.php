<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\exceptions\CompanyNotExist;

final readonly class CompanyFinder
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function __invoke(string $companyId): CompanyResponse
    {
        $company = $this->repository->search($companyId, false);

        if (empty($company)) {
            throw new CompanyNotExist();
        }

        return new CompanyResponse($company->toArray());
    }
}