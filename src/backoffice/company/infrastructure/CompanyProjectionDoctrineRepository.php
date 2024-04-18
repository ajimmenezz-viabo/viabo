<?php declare(strict_types=1);


namespace Viabo\backoffice\company\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\backoffice\company\domain\projection\CompanyProjection;
use Viabo\backoffice\company\domain\projection\CompanyProjectionRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class CompanyProjectionDoctrineRepository extends DoctrineRepository implements CompanyProjectionRepository
{
    public function __construct(EntityManager $BackofficeEntityManager)
    {
        parent::__construct($BackofficeEntityManager);
    }

    public function save(CompanyProjection $company): void
    {
        $typeName = $this->searchType($company->type());
        $statusName = $this->searchStatus($company->status());
        $company->updateStatusNameAndTypeName($typeName,$statusName);

        $this->persist($company);
    }

    public function search(string $companyId): CompanyProjection|null
    {
        return $this->repository(CompanyProjection::class)->find($companyId);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(CompanyProjection::class)->matching($criteriaConvert)->toArray();;
    }

    public function update(CompanyProjection $company): void
    {
        $this->entityManager()->flush($company);
    }

    public function delete(CompanyProjection $company): void
    {
        $this->remove($company);
    }

    private function searchType($type): string
    {
        $query = "select Name from cat_backoffice_companies_types where Id = :type";
        $statement = $this->entityManager()->getConnection()->prepare($query);
        $statement->bindValue('type', $type);
        return $statement->execute()->fetchOne();
    }

    private function searchStatus(string $status): string
    {
        $query = "select Name from cat_backoffice_companies_status where Id = :status";
        $statement = $this->entityManager()->getConnection()->prepare($query);
        $statement->bindValue('status', $status);
        return $statement->execute()->fetchOne();
    }

}