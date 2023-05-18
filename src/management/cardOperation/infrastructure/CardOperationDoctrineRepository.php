<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\management\cardOperation\domain\CardOperationRepository;
use Viabo\management\cardOperation\domain\CardOperations;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use function Lambdish\Phunctional\instance_of;

final class CardOperationDoctrineRepository extends DoctrineRepository implements CardOperationRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function save(CardOperations $operations): void
    {
        foreach ($operations->getIterator() as $cardOperation) {
            $this->persist($cardOperation);
        }
    }
}