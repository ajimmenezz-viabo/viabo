<?php declare(strict_types=1);


namespace Viabo\security\code\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\security\code\domain\Code;
use Viabo\security\code\domain\CodeRepository;
use Viabo\security\shared\domain\user\UserId;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class CodeDoctrineRepository extends DoctrineRepository implements CodeRepository
{
    public function __construct(EntityManager $SecurityEntityManager)
    {
        parent::__construct($SecurityEntityManager);
    }

    public function save(Code $code): void
    {
        $this->persist($code);
    }

    public function search(UserId $userId): ?Code
    {
        return $this->repository(Code::class)->findOneBy(['userId' => $userId->value()]);
    }

    public function delete(Code $code): void
    {
        $this->remove($code);
    }
}