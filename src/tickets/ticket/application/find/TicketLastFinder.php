<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\application\find;


use Viabo\tickets\ticket\domain\TicketRepository;

final readonly class TicketLastFinder
{
    public function __construct(private TicketRepository $repository)
    {
    }

    public function __invoke(): TicketResponse
    {
        $ticket = $this->repository->searchIdLast();
        $id = empty($ticket) ? ['id' => '999999'] : ['id' => $ticket->id()];

        return new TicketResponse($id);
    }
}