<?php declare(strict_types=1);


namespace Viabo\spei\externalAccount\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;
use Viabo\spei\externalAccount\domain\ExternalAccount;
use Viabo\spei\externalAccount\domain\ExternalAccountRepository;

final class ExternalAccountDoctrineRepository extends DoctrineRepository implements ExternalAccountRepository
{
    public function __construct(EntityManager $SpeiEntityManager)
    {
        parent::__construct($SpeiEntityManager);
    }

    public function save(ExternalAccount $externalAccount): void
    {
        $this->persist($externalAccount);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(ExternalAccount::class)->matching($criteriaConvert)->toArray();
    }
}