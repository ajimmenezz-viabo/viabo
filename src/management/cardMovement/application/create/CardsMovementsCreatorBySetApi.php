<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\application\create;


use Viabo\management\cardMovement\application\find\CardsMovementsResponse;
use Viabo\management\cardMovement\domain\services\CardMovementsFinderOnSet;

final readonly class CardsMovementsCreatorBySetApi
{
    public function __construct(private CardMovementsFinderOnSet $finderOnSet)
    {
    }

    public function __invoke(
        array  $cards ,
        array  $cardsOperations ,
        string $initialDate ,
        string $finalDate,
    ): CardsMovementsResponse
    {
        $cardMovements = [];
        foreach ($cards as $card) {
            $cardMovementsOnSetApi = $this->finderOnSet->__invoke(
                $card ,
                $initialDate ,
                $finalDate ,
                $cardsOperations
            );
            $cardMovements = array_merge($cardMovements , $cardMovementsOnSetApi->toArray());
        }

        return new CardsMovementsResponse($cardMovements);
    }
}