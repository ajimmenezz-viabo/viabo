<?php declare(strict_types=1);

namespace Viabo\management\terminalConsolidation\application\find;

use Viabo\shared\domain\bus\query\Query;

final readonly class TerminalConsolidationTransactionsQuery implements Query
{
    public function __construct(public string $commerceId, public ?string $terminalId)
    {
    }
}
