<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\application\find;

use Viabo\management\commerceTerminal\domain\TerminalValueId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FindTerminalSpeiCardQueryHandler implements QueryHandler
{
    public function __construct(public FinderTerminalSpeiCard $finder)
    {
    }
    public function __invoke(FindTerminalSpeiCardQuery $query):Response
    {
        $terminalId = TerminalValueId::create($query->terminalId);

        return $this->finder->__invoke($terminalId);
    }
}
