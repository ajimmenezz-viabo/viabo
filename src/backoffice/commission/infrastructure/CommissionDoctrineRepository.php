<?php declare(strict_types=1);


namespace Viabo\backoffice\commission\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\backoffice\commission\domain\Commission;
use Viabo\backoffice\commission\domain\CommissionRepository;
use Viabo\backoffice\shared\domain\company\CompanyId;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class CommissionDoctrineRepository extends DoctrineRepository implements CommissionRepository
{
    public function __construct(EntityManager $BackofficeEntityManager)
    {
        parent::__construct($BackofficeEntityManager);
    }

    public function save(Commission $commission): void
    {
        $this->persist($commission);
    }

    public function search(CompanyId $commerceId): Commission|null
    {
        return $this->repository(Commission::class)->findOneBy(['commerceId' => $commerceId->value()]);
    }

    public function update(Commission $commission): void
    {
        $this->entityManager()->flush($commission);
    }
}