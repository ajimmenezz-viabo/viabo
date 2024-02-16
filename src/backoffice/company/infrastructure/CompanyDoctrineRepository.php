<?php declare(strict_types=1);


namespace Viabo\backoffice\company\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\backoffice\company\domain\Company;
use Viabo\backoffice\company\domain\CompanyBankAccount;
use Viabo\backoffice\company\domain\CompanyCostCenter;
use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\CompanyUser;
use Viabo\backoffice\company\domain\CompanyView;
use Viabo\backoffice\shared\domain\commerce\CompanyId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class CompanyDoctrineRepository extends DoctrineRepository implements CompanyRepository
{
    public function __construct(EntityManager $BackofficeEntityManager)
    {
        parent::__construct($BackofficeEntityManager);
    }

    public function save(Company $company): void
    {
        $this->persist($company);
        $this->updateBankAccountWithNotAvailable($company->bankAccount());
    }

    public function search(string $companyId): Company|null
    {
        return $this->repository(Company::class)->find($companyId);
    }

    public function searchView(CompanyId $companyId): CompanyView|null
    {
        return $this->repository(CompanyView::class)->find($companyId->value());
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(Company::class)->matching($criteriaConvert)->toArray();
    }

    public function searchViewCriteria(Criteria $criteria): array
    {
        $criteria = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(CompanyView::class)->matching($criteria)->toArray();
    }

    public function searchCommerceIdBy(string $userId, string $userProfileId): string
    {
        $query = "call SearchCommerceId(:userId,:userProfileId)";
        $statement = $this->entityManager()->getConnection()->prepare($query);
        $statement->bindValue('userId', $userId);
        $statement->bindValue('userProfileId', $userProfileId);
        $result = $statement->executeQuery()->fetchAllAssociative();
        if (!empty($result)) {
            foreach ($result as $item) {
                return $item['CommerceId'];
            }
        }
        return '';
    }

    public function searchCenterCost(string $centerCostsId): CompanyCostCenter|null
    {
        return $this->repository(CompanyCostCenter::class)->find($centerCostsId);
    }

    public function searchUser(string $userId): CompanyUser|null
    {
        return $this->repository(CompanyUser::class)->find($userId);
    }

    public function searchAvailableBankAccount(): CompanyBankAccount|null
    {
        return $this->repository(CompanyBankAccount::class)->findOneBy(['available' => '1'], ['id' => 'asc']);
    }

    public function searchAll(): array
    {
        return $this->repository(Company::class)->findAll();
    }

    public function searchFolioLast(): Company|null
    {
        return $this->repository(Company::class)->findOneBy([], ['folio.value' => 'desc']);
    }

    public function update(Company $company): void
    {
        $this->entityManager()->flush($company);
    }

    public function delete(Company $company): void
    {
        $this->updateBankAccountWithAvailable($company->bankAccount());
        $this->remove($company);
    }

    private function updateBankAccountWithNotAvailable(CompanyBankAccount $bankAccount): void
    {
        $bankAccount->notAvailable();
        $this->entityManager()->flush($bankAccount);
    }

    private function updateBankAccountWithAvailable(CompanyBankAccount $bankAccount): void
    {
        $bankAccount->available();
        $this->entityManager()->flush($bankAccount);
    }
}