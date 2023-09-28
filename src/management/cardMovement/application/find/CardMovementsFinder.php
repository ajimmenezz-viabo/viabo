<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\application\find;


use Viabo\management\cardMovement\domain\CardMovementFinalDate;
use Viabo\management\cardMovement\domain\CardMovementInitialDate;
use Viabo\management\cardMovement\domain\services\CardMovementsFinderOnSet;
use Viabo\management\shared\domain\card\CardClientKey;
use Viabo\management\shared\domain\card\CardNumber;

final readonly class CardMovementsFinder
{

    public function __construct(private CardMovementsFinderOnSet $finder)
    {
    }

    public function __invoke(
        CardNumber              $cardNumber ,
        CardMovementInitialDate $initialDate ,
        CardMovementFinalDate   $finalDate ,
        CardClientKey           $clientKey ,
        array                   $operations
    ): CardMovementsResponse
    {
        $movements = $this->finder->__invoke($cardNumber , $clientKey , $initialDate , $finalDate , $operations);
        return new CardMovementsResponse($movements);
    }
}