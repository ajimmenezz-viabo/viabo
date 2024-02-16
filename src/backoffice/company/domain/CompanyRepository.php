<?php declare(strict_types=1);

namespace Viabo\backoffice\company\domain;

use Viabo\backoffice\shared\domain\commerce\CompanyId;
use Viabo\shared\domain\criteria\Criteria;

interface CompanyRepository
{
    public function save(Company $company): void;

    public function search(CompanyId $companyId): Company|null;

    public function searchView(CompanyId $companyId): CompanyView|null;

    public function searchCriteria(Criteria $criteria): array;

    public function searchViewCriteria(Criteria $criteria): array;

    public function searchCommerceIdBy(string $userId, string $userProfileId): string;

    public function searchCenterCost(string $centerCostsId): CompanyCostCenter|null;

    public function searchUser(string $userId): CompanyUser|null;

    public function searchAvailableBankAccount(): CompanyBankAccount|null;

    public function searchAll(): array;

    public function searchFolioLast(): Company|null;

    public function update(Company $company): void;

    public function delete(Company $company): void;

}