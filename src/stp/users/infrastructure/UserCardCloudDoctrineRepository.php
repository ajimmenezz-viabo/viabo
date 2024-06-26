<?php declare(strict_types=1);


namespace Viabo\stp\users\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;
use Viabo\stp\users\domain\UserCardCloud;
use Viabo\stp\users\domain\UserCardCloudRepository;

final class UserCardCloudDoctrineRepository extends DoctrineRepository implements UserCardCloudRepository
{
    public function __construct(EntityManager $StpEntityManager)
    {
        parent::__construct($StpEntityManager);
    }

    public function save(UserCardCloud $owner): void
    {
        $this->persist($owner);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(UserCardCloud::class)->matching($criteriaConvert)->toArray();
    }
}