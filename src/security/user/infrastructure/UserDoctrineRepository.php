<?php declare(strict_types=1);


namespace Viabo\security\user\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\User;
use Viabo\security\user\domain\UserEmail;
use Viabo\security\user\domain\UserRepository;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;

final class UserDoctrineRepository extends DoctrineRepository implements UserRepository
{
    public function __construct(EntityManager $SecurityEntityManager)
    {
        parent::__construct($SecurityEntityManager);
    }

    public function save(User $user): void
    {
        $this->persist($user);
    }

    public function search(UserEmail $email): ?User
    {
        return $this->repository(User::class)->findOneBy(['email.value' => $email->value()]);
    }

    public function searchId(UserId $userId): ?User
    {
        return $this->repository(User::class)->find($userId->value());
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaDoctrine = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(User::class)->matching($criteriaDoctrine)->toArray();
    }
}