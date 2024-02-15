<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\backoffice\costCenter\domain\CostCenter;
use Viabo\backoffice\costCenter\domain\CostCenterRepository;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class CostCenterDoctrineRepository extends DoctrineRepository implements CostCenterRepository
{
    public function __construct(EntityManager $BackofficeEntityManager)
    {
        parent::__construct($BackofficeEntityManager);
    }

    public function searchAll(): array
    {
        return $this->repository(CostCenter::class)->findBy(['active.value' => '1']);
    }
}