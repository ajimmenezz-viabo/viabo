<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;
use Viabo\spei\stpAccount\domain\StpAccountRepository;
use Viabo\spei\stpAccount\domain\StpAccount;

final class StpAccountDoctrineRepository extends DoctrineRepository implements StpAccountRepository
{
    public function __construct(EntityManager $SpeiEntityManager)
    {
        parent::__construct($SpeiEntityManager);
    }

    public function search(string $stpAccountId): StpAccount|null
    {
        return $this->repository(StpAccount::class)->find($stpAccountId);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(StpAccount::class)->matching($criteriaConvert)->toArray();
    }
}