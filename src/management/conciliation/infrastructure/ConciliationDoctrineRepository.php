<?php declare(strict_types=1);


namespace Viabo\management\conciliation\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\management\conciliation\domain\Conciliation;
use Viabo\management\conciliation\domain\ConciliationRepository;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class ConciliationDoctrineRepository extends DoctrineRepository implements ConciliationRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function save(Conciliation $conciliation): void
    {
        $this->persist($conciliation);
    }
}