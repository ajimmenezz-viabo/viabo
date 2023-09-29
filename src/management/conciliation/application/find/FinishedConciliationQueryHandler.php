<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\find;


use Viabo\management\shared\domain\card\CardId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class FinishedConciliationQueryHandler implements QueryHandler
{
    public function __construct(private FinishedConciliationFinder $finder)
    {
    }

    public function __invoke(FinishedConciliationQuery $query): Response
    {
        $cardId = CardId::create($query->cardId);

        return $this->finder->__invoke($cardId);
    }
}