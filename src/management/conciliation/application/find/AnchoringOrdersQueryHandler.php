<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class AnchoringOrdersQueryHandler implements QueryHandler
{
    public function __construct(private AnchoringOrdersFinder $finder)
    {
    }

    public function __invoke(AnchoringOrdersQueryByCards $query): Response
    {
        return $this->finder->__invoke($query->cardsData);
    }
}