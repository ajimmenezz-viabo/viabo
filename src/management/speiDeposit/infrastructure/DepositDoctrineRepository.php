<?php declare(strict_types=1);


namespace Viabo\management\speiDeposit\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\management\speiDeposit\domain\Deposit;
use Viabo\management\speiDeposit\domain\DepositRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class DepositDoctrineRepository extends DoctrineRepository implements DepositRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function save(Deposit $deposit): void
    {
        $this->persist($deposit);
    }

    public function searchCriteria(Criteria $criteria): array|null
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(Deposit::class)->matching($criteriaConvert)->toArray();
    }
}