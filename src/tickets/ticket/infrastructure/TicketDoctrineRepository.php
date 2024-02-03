<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\infrastructure;


use Doctrine\ORM\EntityManager;
use Viabo\shared\infrastructure\doctrine\DoctrineRepository;
use Viabo\tickets\ticket\domain\Ticket;
use Viabo\tickets\ticket\domain\TicketFile;
use Viabo\tickets\ticket\domain\TicketRepository;

final class TicketDoctrineRepository extends DoctrineRepository implements TicketRepository
{
    public function __construct(EntityManager $TicketsEntityManager)
    {
        parent::__construct($TicketsEntityManager);
    }

    public function save(Ticket $ticket): void
    {
        $this->persist($ticket);
        $this->entityManager()->clear();
        array_map(function (TicketFile $file) {
            $this->persist($file);
        } , $ticket->files());
    }

    public function searchIdLast(): Ticket|null
    {
        return $this->repository(Ticket::class)->findOneBy([] , ['id.value' => 'desc']);
    }
}