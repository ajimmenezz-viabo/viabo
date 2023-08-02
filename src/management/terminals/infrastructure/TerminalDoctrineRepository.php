<?php declare(strict_types=1);

namespace Viabo\management\terminals\infrastructure;

use Doctrine\ORM\EntityManager;
use Viabo\management\terminals\domain\TerminalCommerceId;
use Viabo\management\terminals\domain\Terminal;
use Viabo\management\terminals\domain\TerminalRepository;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class TerminalDoctrineRepository extends DoctrineRepository implements TerminalRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }

    public function searchBy(TerminalCommerceId $commerceId): array
    {
        return $this->repository(Terminal::class)->findBy(['id.value' => $commerceId->value()]);
    }
}
