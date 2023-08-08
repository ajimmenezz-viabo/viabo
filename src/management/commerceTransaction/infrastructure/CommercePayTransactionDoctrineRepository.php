<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\infrastructure;

use Doctrine\ORM\EntityManager;
use Viabo\management\commerceTransaction\domain\CommercePayTransaction;
use Viabo\management\commerceTransaction\domain\CommercePayTransactionRepository;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class CommercePayTransactionDoctrineRepository extends DoctrineRepository implements CommercePayTransactionRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function save(CommercePayTransaction $transaction): void
    {
        $this->persist($transaction);
    }
}
