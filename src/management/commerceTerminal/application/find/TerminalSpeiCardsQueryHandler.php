<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\application\find;

use Viabo\management\shared\domain\card\CardCommerceId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class TerminalSpeiCardsQueryHandler implements QueryHandler
{
    public function __construct(private FinderTerminalSpeiCards $finder)
    {
    }

    public function __invoke(TerminalSpeiCardsQuery $query): Response
    {
        $commerceId = CardCommerceId::create($query->commerceId);

        return $this->finder->__invoke($commerceId);
    }
}
