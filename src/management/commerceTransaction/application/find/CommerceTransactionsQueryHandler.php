<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\find;

use Viabo\management\commerceTransaction\domain\CommercePayTransactionDate;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CommerceTransactionsQueryHandler implements QueryHandler
{
    public function __construct(private FinderCommerceTransactions $finder)
    {
    }

    public function __invoke(CommerceTransactionsQuery $query):Response
    {
        $fromDate = new CommercePayTransactionDate('');
        $toDate = new CommercePayTransactionDate('');

        return $this->finder->__invoke(
            $fromDate->format($query->fromDate),
            $toDate->format($query->toDate),
            $query->apiKey,
            $query->terminalsData,
            $query->page,
            $query->pageSize
        );

    }
}
