<?php declare(strict_types=1);


namespace Viabo\security\session\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\security\session\domain\Session;
use Viabo\security\session\domain\SessionRepository;
use Viabo\security\shared\domain\user\UserId;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class SessionDoctrineRepository extends DoctrineRepository implements SessionRepository
{
    public function __construct(EntityManager $SecurityEntityManager)
    {
        parent::__construct($SecurityEntityManager);
    }

    public function save(Session $session): void
    {
        $this->persist($session);
    }

    public function search(UserId $userId): Session|null
    {
        return $this->repository(Session::class)
            ->findOneBy(['userId' => $userId->value() , 'active.value' => '1']);
    }

    public function update(Session $session): void
    {
        $this->entityManager()->flush($session);
    }
}