<?php declare(strict_types=1);


namespace Viabo\security\api\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\security\api\domain\API;
use Viabo\security\api\domain\APIRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class APIDoctrineRepository extends DoctrineRepository implements APIRepository
{
    public function __construct(EntityManager $SecurityEntityManager)
    {
        parent::__construct($SecurityEntityManager);
    }

    public function searchCriteria(Criteria $criteria): array|null
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(API::class)->matching($criteriaConvert)->toArray();
    }
}