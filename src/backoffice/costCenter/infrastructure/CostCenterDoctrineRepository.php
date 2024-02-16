<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\backoffice\costCenter\domain\CostCenter;
use Viabo\backoffice\costCenter\domain\CostCenterRepository;
use Viabo\backoffice\costCenter\domain\CostCenterUser;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class CostCenterDoctrineRepository extends DoctrineRepository implements CostCenterRepository
{
    public function __construct(EntityManager $BackofficeEntityManager)
    {
        parent::__construct($BackofficeEntityManager);
    }

    public function save(CostCenter $costCenter): void
    {
        $this->persist($costCenter);
    }

    public function search(string $costCenterId): CostCenter|null
    {
        return $this->repository(CostCenter::class)->find($costCenterId);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(CostCenter::class)->matching($criteriaConvert)->toArray();
    }

    public function searchAll(): array
    {
        return $this->repository(CostCenter::class)->findBy(['active.value' => '1']);
    }

    public function searchUser(string $userId): CostCenterUser|null
    {
        return $this->repository(CostCenterUser::class)->find($userId);
    }

    public function update(CostCenter $costCenter): void
    {
        $this->entityManager()->flush($costCenter);
    }

    public function delete(CostCenter $costCenter): void
    {
        $this->remove($costCenter);
    }

    public function searchFolioLast(): CostCenter|null
    {
        return $this->repository(CostCenter::class)->findOneBy([], ['folio.value' => 'desc']);
    }
}