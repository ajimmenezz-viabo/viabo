<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class TransactionsBalanceQueryHandler implements QueryHandler
{
    public function __construct(private TransactionsBalanceFinder $finder)
    {
    }

    public function __invoke(TransactionsBalanceQuery $query): Response
    {
        return $this->finder->__invoke($query->initialDate, $query->endDate);
    }
}