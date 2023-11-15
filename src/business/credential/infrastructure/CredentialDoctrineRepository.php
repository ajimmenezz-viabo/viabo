<?php declare(strict_types=1);


namespace Viabo\business\credential\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\business\credential\domain\Credential;
use Viabo\business\credential\domain\CredentialRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class CredentialDoctrineRepository extends DoctrineRepository implements CredentialRepository
{
    public function __construct(EntityManager $BusinessEntityManager)
    {
        parent::__construct($BusinessEntityManager);
    }

    public function save(Credential $credential): void
    {
        $this->persist($credential);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(Credential::class)->matching($criteriaConvert)->toArray();
    }
}