<?php declare(strict_types=1);


namespace Viabo\stp\bank\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\stp\bank\domain\Bank;
use Viabo\stp\bank\domain\BankRepository;

final class BankDoctrineRepository extends DoctrineRepository implements BankRepository
{
    public function __construct(EntityManager $StpEntityManager)
    {
        parent::__construct($StpEntityManager);
    }

    public function search(string $bankId): Bank|null
    {
        return $this->repository(Bank::class)->find($bankId);
    }

    public function searchAll(): array
    {
        return $this->repository(Bank::class)->findBy(['active.value' => '1']);
    }
}