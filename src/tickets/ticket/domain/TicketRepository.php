<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\domain;


interface TicketRepository
{
    public function save(Ticket $ticket): void;

    public function searchIdLast(): Ticket|null;
}