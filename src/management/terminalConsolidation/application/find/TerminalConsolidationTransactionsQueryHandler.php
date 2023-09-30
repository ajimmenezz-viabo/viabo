<?php declare(strict_types=1);

namespace Viabo\management\terminalConsolidation\application\find;

use Viabo\management\shared\domain\commerce\CommerceId;
use Viabo\management\terminalConsolidation\domain\TerminalConsolidationTerminalId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class TerminalConsolidationTransactionsQueryHandler implements QueryHandler
{
    public function __construct(private FinderTerminalConsolidationTransactions $finder)
    {
    }

    public function __invoke(TerminalConsolidationTransactionsQuery $query):Response
    {
        $commerceId = new CommerceId($query->commerceId);
        $terminalId = new TerminalConsolidationTerminalId($query->terminalId);

        return $this->finder->__invoke($commerceId,$terminalId);
    }
}
