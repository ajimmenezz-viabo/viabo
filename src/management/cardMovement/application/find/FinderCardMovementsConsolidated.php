<?php declare(strict_types=1);

namespace Viabo\management\cardMovement\application\find;

use Viabo\management\cardMovement\domain\CardMovement;
use Viabo\management\cardMovement\domain\CardMovementFilter;
use Viabo\management\cardMovement\domain\CardMovementFinalDate;
use Viabo\management\cardMovement\domain\CardMovementInitialDate;
use Viabo\management\shared\domain\card\CardClientKey;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\management\shared\domain\paymentProcessor\PaymentProcessorAdapter;
use Viabo\shared\domain\Utils;

final readonly class FinderCardMovementsConsolidated
{
    public function __construct(private PaymentProcessorAdapter $adapter)
    {
    }

    public function __invoke(
        CardMovementInitialDate $initialDate,
        CardMovementFinalDate   $finalDate,
        array                   $speiCard,
        ?array                  $movementsConsolitaded
    ): CardMovementsConsolidatedResponse
    {
        $mainCardTransactionsId = $this->filteredMainTransactionId($movementsConsolitaded);

        $cardNumber = new CardNumber($speiCard[0]['cardNumber']);
        $cardClientKey = new CardClientKey($speiCard[0]['clientKey']);

        $cardMovement = CardMovementFilter::create($cardNumber,$cardClientKey, $initialDate , $finalDate);

        $cardMovements = $this->adapter->searchMovements($cardMovement);
        $movements = empty($cardMovements) ? [] : $cardMovements['TicketMessage'];

        $mainCardsMovements = $this->movementsData($movements,$mainCardTransactionsId,$cardNumber->value());

        return new CardMovementsConsolidatedResponse(array_filter($mainCardsMovements));
    }

    private function movementsData(mixed $movements,mixed $mainCardTransactionsId ,string $cardNumber): array
    {

        return array_map(function (array $movementData) use($cardNumber,$mainCardTransactionsId){
            $data = [];

            $movement = CardMovement::create(
                $movementData['Auth_Code'] ,
                $movementData['Type_Id'] ,
                $movementData['charge'] ,
                $movementData['Accredit'] ,
                $movementData['Merchant'] ,
                $movementData['Date']
            );
            if($movement->isNotConsolidated($mainCardTransactionsId)){
                $data = $movement->toArray();
                $data['cardNumber'] = $cardNumber;
            }

            return $data;
        } , array_filter($movements , function (array $movementData) {
            return !empty($movementData['Transaction_Id']);
        }));
    }

    private function filteredMainTransactionId(?array $movementsConsolitaded): array
    {
        $mainCardTransactionsId = array_map(function (array $movementConsolitaded){
            return $movementConsolitaded['mainCardTransactionId'];
        },$movementsConsolitaded);

        return Utils::removeDuplicateElements($mainCardTransactionsId);
    }
}
