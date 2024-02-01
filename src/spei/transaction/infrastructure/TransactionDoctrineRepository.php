<?php declare(strict_types=1);


namespace Viabo\spei\transaction\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\shared\infrastructure\persistence\DoctrineCriteriaConverter;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;

final class TransactionDoctrineRepository extends DoctrineRepository implements TransactionRepository
{
    public function __construct(EntityManager $SpeiEntityManager)
    {
        parent::__construct($SpeiEntityManager);
    }

    public function save(Transaction $transaction): void
    {
        $this->persist($transaction);
    }

    public function search(string $transactionId): Transaction|null
    {
        return $this->repository(Transaction::class)->find($transactionId);
    }

    public function searchCriteria(Criteria $criteria): array
    {
        $criteriaConvert = DoctrineCriteriaConverter::convert($criteria);
        return $this->repository(Transaction::class)->matching($criteriaConvert)->toArray();
    }
}