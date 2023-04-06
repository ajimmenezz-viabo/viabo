<?php declare(strict_types=1);


namespace Viabo\business\services\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\business\services\domain\Service;
use Viabo\business\services\domain\ServiceRepository;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class ServiceDoctrineRepository extends DoctrineRepository implements ServiceRepository
{
    public function __construct(EntityManager $BusinessEntityManager)
    {
        parent::__construct($BusinessEntityManager);
    }

    public function save(Service $service): void
    {
        $this->persist($service);
    }

    public function delete(CommerceId $commerceId): void
    {
        $this->entityManager()->getConnection()->delete('t_business_commerces_services' , ['CommerceId' => $commerceId->value()]);
    }
}