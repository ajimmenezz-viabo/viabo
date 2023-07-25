<?php declare(strict_types=1);


namespace Viabo\management\webhook\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\management\webhook\domain\WebhookRepository;
use Viabo\shared\domain\utils\DatePHP;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class WebhookDoctrineRepository extends DoctrineRepository implements WebhookRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function save(string $pays): void
    {
        $date = new DatePHP();
        $query = "insert into t_management_register_pays_set (Data,RegisterDate) values (:data,:date)";
        $stmt = $this->entityManager()->getConnection()->prepare($query);
        $stmt->bindValue('data' , $pays);
        $stmt->bindValue('date' , $date->now());
        $stmt->executeQuery();
    }

    public function search(string $token): array
    {
        $query = "select * from t_management_web_hook_tokens where token = :token and Active = 1";
        $stmt = $this->entityManager()->getConnection()->prepare($query);
        $stmt->bindValue('token' , $token);
        return $stmt->executeQuery()->fetchAllAssociative();
    }
}