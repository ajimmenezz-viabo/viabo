<?php declare(strict_types=1);


namespace Viabo\business\commerce\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\business\commerce\domain\CommerceRepository;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class CommerceDoctrineRepository extends DoctrineRepository implements CommerceRepository
{
    public function __construct(EntityManager $BusinessEntityManager)
    {
        parent::__construct($BusinessEntityManager);
    }

}