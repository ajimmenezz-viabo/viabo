<?php declare(strict_types=1);


namespace Viabo\backoffice\users\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\backoffice\users\domain\CompanyUser;
use Viabo\backoffice\users\domain\CompanyUserRepository;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class CompanyUserDoctrineRepository extends DoctrineRepository implements CompanyUserRepository
{
    public function __construct(EntityManager $BackofficeEntityManager)
    {
        parent::__construct($BackofficeEntityManager);
    }

    public function save(CompanyUser $user): void
    {
        $this->persist($user);
    }
}