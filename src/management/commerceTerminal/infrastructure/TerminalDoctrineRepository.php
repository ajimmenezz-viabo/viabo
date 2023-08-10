<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\infrastructure;

use Doctrine\ORM\EntityManager;
use Viabo\management\commerceTerminal\domain\TerminalCommerceId;
use Viabo\management\commerceTerminal\domain\Terminal;
use Viabo\management\commerceTerminal\domain\TerminalRepository;
use Viabo\management\commerceTerminal\domain\TerminalView;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;

final class TerminalDoctrineRepository extends DoctrineRepository implements TerminalRepository
{
    public function __construct(EntityManager $ManagementEntityManager)
    {
        parent::__construct($ManagementEntityManager);
    }
    public function save (Terminal $terminal): void
    {
        $this->persist($terminal);
    }
    public function searchBy(TerminalCommerceId $commerceId): array
    {
        return $this->repository(TerminalView::class)->findBy(['commerceId' => $commerceId->value()]);
    }
}
