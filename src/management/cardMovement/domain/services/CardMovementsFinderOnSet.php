<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain\services;


use Viabo\management\cardMovement\domain\CardMovement;
use Viabo\management\cardMovement\domain\CardMovementFilter;
use Viabo\management\cardMovement\domain\CardMovementFinalDate;
use Viabo\management\cardMovement\domain\CardMovementInitialDate;
use Viabo\management\shared\domain\card\CardClientKey;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\management\shared\domain\paymentProcessor\PaymentProcessorAdapter;

final readonly class CardMovementsFinderOnSet
{
    public function __construct(private PaymentProcessorAdapter $adapter)
    {
    }

    public function __invoke(
        CardNumber              $cardNumber ,
        CardClientKey           $clientKey ,
        CardMovementInitialDate $initialDate ,
        CardMovementFinalDate   $finalDate ,
        array                   $operations = []
    ): array
    {
        $cardMovement = CardMovementFilter::create($cardNumber , $clientKey , $initialDate , $finalDate);
        $cardMovements = $this->adapter->searchMovements($cardMovement);
        $movements = empty($cardMovements) ? [] : $cardMovements['TicketMessage'];
        return $this->formatMovementsData($movements , $operations);
    }

    private function formatMovementsData(array $movements , array $operations): array
    {
        return array_map(function (array $movementData) use ($operations) {
            $movement = CardMovement::create(
                $movementData['Auth_Code'] ,
                $movementData['Type_Id'] ,
                $movementData['charge'] ,
                $movementData['Accredit'] ,
                $movementData['Merchant'] ,
                $movementData['Date']
            );
            $movement->updateDescriptionWith($operations);
            return $movement->toArray();
        } , array_filter($movements , function (array $movementData) {
            return !empty($movementData['Transaction_Id']);
        }));
    }
}