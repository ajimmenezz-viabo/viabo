<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class TicketIdLastQueryHandler implements QueryHandler
{
    public function __construct(private TicketLastFinder $finder)
    {
    }

    public function __invoke(TicketIdLastQuery $query): Response
    {
        return $this->finder->__invoke();
    }
}