<?php declare(strict_types=1);


namespace Viabo\management\conciliation\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\management\conciliation\domain\Conciliation;
use Viabo\management\conciliation\domain\ConciliationReferenceNumber;
use Viabo\management\conciliation\domain\ConciliationRepository;
use Viabo\management\conciliation\domain\ConciliationView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class ConciliationDoctrineRepository extends DoctrineRepository implements ConciliationRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function save(Conciliation $conciliation): void
    {
        $this->persist($conciliation);
    }

    public function search(ConciliationReferenceNumber $referenceNumber): ?Conciliation
    {
        return $this->repository(Conciliation::class)->findOneBy([
            'referenceNumber.value' => $referenceNumber->value()
        ]);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(Conciliation::class)->matching($criteriaConvert)->toArray();
    }

    public function searchView(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(ConciliationView::class)->matching($criteriaConvert)->toArray();
    }
}