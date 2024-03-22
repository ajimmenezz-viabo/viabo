<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\find;


use Viabo\backoffice\company\domain\Company;
use Viabo\backoffice\company\domain\CompanyRepository;

final readonly class CompaniesFinderByAdminUser
{
    public function __construct(private CompanyRepository $repository)
    {
    }

    public function __invoke(string $userId): CompanyResponse
    {
        $companies = $this->repository->searchAdminUsers($userId);
        return new CompanyResponse(array_map(function (Company $company) {
            return $company->toArray();
        }, $companies));
    }

}