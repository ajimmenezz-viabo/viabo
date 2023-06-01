<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\business\commerceUser\domain\CommerceUser;
use Viabo\business\commerceUser\domain\CommerceUserRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class CommerceUserDoctrineRepository extends DoctrineRepository implements CommerceUserRepository
{
    public function __construct(EntityManager $BusinessEntityManager)
    {
        parent::__construct($BusinessEntityManager);
    }

    public function save(CommerceUser $commerceUser): void
    {
        $this->persist($commerceUser);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(CommerceUser::class)->matching($criteriaConvert)->toArray();
    }
}