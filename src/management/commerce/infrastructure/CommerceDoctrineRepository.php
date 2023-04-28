<?php declare(strict_types=1);


namespace Viabo\management\commerce\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\management\commerce\domain\CommerceRepository;
use Viabo\management\commerce\domain\CommerceView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class CommerceDoctrineRepository extends DoctrineRepository implements CommerceRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(CommerceView::class)->matching($criteriaConvert)->toArray();
    }
}