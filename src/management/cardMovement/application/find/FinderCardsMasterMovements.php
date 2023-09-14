<?php declare(strict_types=1);

namespace Viabo\management\cardMovement\application\find;

use Viabo\management\cardMovement\domain\CardMovement;
use Viabo\management\cardMovement\domain\CardMovementFilter;
use Viabo\management\cardMovement\domain\CardMovementFinalDate;
use Viabo\management\cardMovement\domain\CardMovementInitialDate;
use Viabo\management\shared\domain\card\CardClientKey;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\management\shared\domain\paymentProcessor\PaymentProcessorAdapter;
use Viabo\shared\domain\utils\DatePHP;

final readonly class FinderCardsMasterMovements
{
    public function __construct(private PaymentProcessorAdapter $adapter)
    {
    }

    public function __invoke(
        array                   $cardsInformation,
        array                   $operations,
        array                   $payTransactions,
        CardMovementInitialDate $initialDate ,
        CardMovementFinalDate   $finalDate
    ): CardsMovementsResponse
    {
        if(!empty($payTransactions)){
            $payTransactions = $this->payTransactionsApproved($payTransactions['movements']);
        }
        $allMovements = [];
        foreach ($cardsInformation as $card) {
            $cardNumber = CardNumber::create($card['cardNumber']);
            $clientKey = CardClientKey::create($card['clientKey']);
            $cardMovement = CardMovementFilter::create( $cardNumber, $clientKey , $initialDate , $finalDate);
            $cardMovements = $this->adapter->searchMovements($cardMovement);
            $movements = empty($cardMovements) ? [] : $cardMovements['TicketMessage'];
            $allMovements = array_merge($allMovements,$this->movementsData($operations , $movements,$card['paymentProcessor']));
        }

        $masterAllMovements = array_merge($allMovements,$payTransactions);

        return new CardsMovementsResponse($masterAllMovements);
    }

    private function movementsData(array $operations , mixed $movements,string $paymentProcessor): array
    {
        return array_map(function (array $movementData) use ($operations, $paymentProcessor) {
            $movement = CardMovement::create(
                $movementData['Auth_Code'] ,
                $movementData['Type_Id'] ,
                $movementData['charge'] ,
                $movementData['Accredit'] ,
                $movementData['Merchant'] ,
                $movementData['Date']
            );
            $movement->updateDescriptionWith($operations);
            $data = $movement->toArray();
            $data['typeOperation'] = $movement->typeOperation($operations);
            $data['paymentProcessor']= $paymentProcessor;
            return $data;
        } , array_filter($movements , function (array $movementData) {
            return !empty($movementData['Transaction_Id']);
        }));
    }

    private function payTransactionsApproved(array $payTransactions): array
    {
        $data = array_map(function (array $transaction){
            $description = "{$transaction['result_message']} en {$transaction['terminal_name']}";
            $date = new DatePHP();

            return [
                'date' => $date->formatDateTime($transaction['transaction_date']),
                'description' => $description,
                'concept' => '',
                'amount' => $transaction['amount'],
                'type' => "Terminal",
                'typeOperation' => "VIABO PAY",
                'paymentProcessor' => "Terminal",
            ];
        }  , array_filter($payTransactions , function (array $payTransactionsData) {
            return $payTransactionsData['approved'];
        }));

        return array_values($data);
    }
}
