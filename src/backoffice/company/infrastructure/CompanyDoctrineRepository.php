<?php declare(strict_types=1);


namespace Viabo\backoffice\company\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\backoffice\company\domain\Company;
use Viabo\backoffice\company\domain\CompanyBankAccount;
use Viabo\backoffice\company\domain\CompanyCostCenter;
use Viabo\backoffice\company\domain\CompanyRepository;
use Viabo\backoffice\company\domain\CompanyUserOld;
use Viabo\backoffice\company\domain\projection\CompanyProjection;
use Viabo\backoffice\shared\domain\company\CompanyId;
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
        $this->persistProjection($company->toArray());

//        $this->updateBankAccountWithNotAvailable($company->bankAccount());

    }

    public function search(string $companyId, bool $projection = false): Company|CompanyProjection|null
    {
        if ($projection) {
            return $this->repository(CompanyProjection::class)->find($companyId);
        }
        return $this->repository(Company::class)->find($companyId);
    }

    public function searchView(CompanyId $companyId): CompanyProjection|null
    {
        return $this->repository(CompanyProjection::class)->find($companyId->value());
    }

    public function searchCriteria(Criteria $criteria, bool $projection = false): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);

        if ($projection) {
            return $this->repository(CompanyProjection::class)->matching($criteriaConvert)->toArray();;
        }

        return $this->repository(Company::class)->matching($criteriaConvert)->toArray();
    }

    public function searchAdminUsers(string $userId): array
    {
        $dql = "SELECT c FROM Viabo\backoffice\company\domain\Company c 
                JOIN c.users u 
                WHERE u.id = ?1";

        $result = $this->entityManager()->createQuery($dql)
            ->setParameter(1, $userId)
            ->getResult();
        return empty($result) ? [] : $result;
    }

    public function searchViewCriteria(Criteria $criteria): array
    {
        $criteria = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(CompanyProjection::class)->matching($criteria)->toArray();
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

    public function searchUser(string $userId): CompanyUserOld|null
    {
        return $this->repository(CompanyUserOld::class)->find($userId);
    }

    public function searchAvailableBankAccount(): CompanyBankAccount|null
    {
        return $this->repository(CompanyBankAccount::class)->findOneBy(['available' => '1'], ['id' => 'asc']);
    }

    public function searchAll(): array
    {
        return $this->repository(Company::class)->findAll();
    }

    public function searchFolioLast(): string
    {
        $company = $this->repository(Company::class)->findOneBy([], ['folio.value' => 'desc']);
        return $company->folio();
    }

    public function searchByBankAccount(string $bankAccount): Company|null
    {
        $dql = "SELECT c, ba FROM Viabo\backoffice\company\domain\Company c 
                JOIN c.bankAccounts ba 
                WHERE ba.number = ?1";

        $result = $this->entityManager()->createQuery($dql)
            ->setParameter(1, $bankAccount)
            ->setMaxResults(1)
            ->getResult();
        return empty($result) ? null : $result[0];
    }

    public function update(Company|CompanyProjection $company): void
    {
        $this->entityManager()->flush($company);
//        $speiCommissions = $company->speiCommissions();
//        $this->entityManager()->flush($company);
//        if (!empty($speiCommissions)) {
//            $this->entityManager()->flush($speiCommissions);
//        }
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

    private function persistProjection(array $company): void
    {
        $company['typeName'] = $this->searchType($company['type']);
        $projection = CompanyProjection::fromCompany($company);
        $this->persist($projection);
    }

    private function searchType($type): string
    {
        $query = "select Name from cat_backoffice_companies_types where Id = :type";
        $statement = $this->entityManager()->getConnection()->prepare($query);
        $statement->bindValue('type', $type);
        return $statement->execute()->fetchOne();
    }

}