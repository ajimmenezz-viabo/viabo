<?php declare(strict_types=1);

namespace Viabo\management\cardMovement\application\find;

use Viabo\management\cardMovement\domain\CardMovementFinalDate;
use Viabo\management\cardMovement\domain\CardMovementInitialDate;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CardsMasterMovementsQueryHandler implements QueryHandler
{
    public function __construct(private FinderCardsMasterMovements $finder)
    {
    }

    public function __invoke(CardsMasterMovementsQuery $query):Response
    {
        $initialDate = CardMovementInitialDate::create($query->initialDate);
        $finalDate = CardMovementFinalDate::create($query->finalDate);

        return $this->finder->__invoke(
            $query->cardsInformation,$query->operations,$query->payTransactions , $initialDate , $finalDate
        );
    }
}