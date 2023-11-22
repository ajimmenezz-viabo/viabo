<?php declare(strict_types=1);

namespace Viabo\management\terminalConsolidation\application\find;

use Viabo\shared\domain\bus\query\Query;

final readonly class TerminalConciliationsQuery implements Query
{
    public function __construct(public array $terminals, public string $terminalId)
    {
    }
}