<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\domain;


use Viabo\shared\domain\criteria\Criteria;

interface TicketRepository
{
    public function save(Ticket $ticket): void;

    public function searchIdLast(): Ticket|null;

    public function searchCriteria(Criteria $criteria): array;
}