<?php declare(strict_types=1);


namespace Viabo\business\commission\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\business\commission\domain\Commission;
use Viabo\business\commission\domain\CommissionRepository;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class CommissionDoctrineRepository extends DoctrineRepository implements CommissionRepository
{
    public function __construct(EntityManager $BusinessEntityManager)
    {
        parent::__construct($BusinessEntityManager);
    }

    public function save(Commission $commission): void
    {
        $this->persist($commission);
    }

    public function search(CommerceId $commerceId): Commission|null
    {
        return $this->repository(Commission::class)->findOneBy(['commerceId' => $commerceId->value()]);
    }

    public function update(Commission $commission): void
    {
        $this->entityManager()->flush($commission);
    }
}