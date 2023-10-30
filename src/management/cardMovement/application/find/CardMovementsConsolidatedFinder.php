<?php declare(strict_types=1);

namespace Viabo\management\cardMovement\application\find;

use Viabo\management\cardMovement\domain\CardMovement;
use Viabo\management\cardMovement\domain\CardMovementFilter;
use Viabo\management\cardMovement\domain\CardMovementFinalDate;
use Viabo\management\cardMovement\domain\CardMovementInitialDate;
use Viabo\management\cardMovement\domain\services\CardMovementsFinderOnSet;
use Viabo\management\shared\domain\card\CardClientKey;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\management\shared\domain\paymentProcessor\PaymentProcessorAdapter;
use Viabo\shared\domain\Utils;
use Viabo\shared\domain\utils\DatePHP;

final readonly class CardMovementsConsolidatedFinder
{
    public function __construct(
        private CardMovementsFinderOnSet $finder ,
        private DatePHP $datePHP,
        private PaymentProcessorAdapter  $adapter
    )
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

        $cardNumber = new CardNumber($speiCard['cardNumber']);
        $cardClientKey = new CardClientKey($speiCard['clientKey']);

        $cardMovement = CardMovementFilter::create(
            $cardNumber->value() , $cardClientKey->value() , $initialDate->value() , $finalDate->value()
        );

        $cardMovements = $this->adapter->searchMovements($cardMovement);
        $movements = empty($cardMovements) ? [] : $cardMovements['TicketMessage'];

        $mainCardsMovements = $this->movementsData($movements , $mainCardTransactionsId , $cardNumber->value());

        return new CardMovementsConsolidatedResponse($mainCardsMovements);
    }

    private function movementsData(mixed $movements , mixed $mainCardTransactionsId , string $cardNumber): array
    {
        $data = array_map(function (array $movementData) use ($cardNumber , $mainCardTransactionsId) {
            $data = [];

            $movement = CardMovement::fromSetApiValue(
                '',
                $cardNumber,
                '',
                $movementData['Auth_Code'] ,
                $movementData['Type_Id'] ,
                $movementData['charge'] ,
                $movementData['Accredit'] ,
                $movementData['Merchant'] ,
                $movementData['Date'],
                []
            );
            if ($movement->isNotConsolidated($mainCardTransactionsId) && $movement->isIncome()) {
                $data = $movement->toArray();
                $data['cardNumber'] = $cardNumber;
            }

            return $data;

        } , array_filter($movements , function (array $movementData) {
            return !empty($movementData['Transaction_Id']);
        }));

        $filterData = array_filter($data , function ($movement) {
            return !empty($movement);
        });

        return array_values($filterData);
    }

    private function filteredMainTransactionId(?array $movementsConsolidated): array
    {
        $mainCardTransactionsId = array_map(function (array $movementConsolidated) {
            return $movementConsolidated['speiCardTransactionId'];
        } , $movementsConsolidated);

        return Utils::removeDuplicateElements($mainCardTransactionsId);
    }
}
