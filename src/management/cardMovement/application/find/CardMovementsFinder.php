<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\application\find;


use Viabo\management\cardMovement\domain\CardMovement;
use Viabo\management\cardMovement\domain\CardMovementFilter;
use Viabo\management\cardMovement\domain\CardMovementFinalDate;
use Viabo\management\cardMovement\domain\CardMovementInitialDate;
use Viabo\management\shared\domain\card\CardClientKey;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\management\shared\domain\paymentProcessor\PaymentProcessorAdapter;

final readonly class CardMovementsFinder
{

    public function __construct(private PaymentProcessorAdapter $adapter)
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
        $cardMovement = CardMovementFilter::create($cardNumber , $clientKey , $initialDate , $finalDate);
        $cardMovements = $this->adapter->searchMovements($cardMovement);

        return new CardMovementsResponse(array_map(function (array $movementData) use ($operations) {
            $movement = CardMovement::create(
                $movementData['Auth_Code'] ,
                $movementData['Type_Id'] ,
                $movementData['charge'] ,
                $movementData['Merchant'] ,
                $movementData['Date']
            );
            $movement->updateDescriptionWith($operations);
            return $movement->toArray();
        } , $cardMovements['TicketMessage']));
    }
}