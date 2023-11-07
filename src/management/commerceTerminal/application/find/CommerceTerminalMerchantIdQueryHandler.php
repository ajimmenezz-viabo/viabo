<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\application\find;

use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CommerceTerminalMerchantIdQueryHandler implements QueryHandler
{
    public function __construct(private TerminalViewFinder $finder)
    {
    }

    public function __invoke(CommerceTerminalMerchantIdQuery $query):Response
    {
        return $this->finder->__invoke($query->terminalId);
    }
}
