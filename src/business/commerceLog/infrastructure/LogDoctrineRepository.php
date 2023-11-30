<?php declare(strict_types=1);


namespace Viabo\business\commerceLog\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\business\commerceLog\domain\Log;
use Viabo\business\commerceLog\domain\LogRepository;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class LogDoctrineRepository extends DoctrineRepository implements LogRepository
{
    public function __construct(EntityManager $BusinessEntityManager)
    {
        parent::__construct($BusinessEntityManager);
    }

    public function save(Log $log): void
    {
        $this->persist($log);
    }
}