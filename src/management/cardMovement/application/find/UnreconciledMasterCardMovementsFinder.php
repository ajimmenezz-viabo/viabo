<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\application\find;


use Viabo\management\cardMovement\domain\CardMovementFinalDate;
use Viabo\management\cardMovement\domain\CardMovementInitialDate;
use Viabo\management\cardMovement\domain\services\CardMovementsFinderOnSet;
use Viabo\management\shared\domain\card\CardClientKey;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\Utils;

final readonly class UnreconciledMasterCardMovementsFinder
{
    public function __construct(private CardMovementsFinderOnSet $finder)
    {
    }

    public function __invoke(
        CardNumber              $cardNumber ,
        CardMovementInitialDate $initialDate ,
        CardMovementFinalDate   $finalDate ,
        CardClientKey           $clientKey ,
        string                  $anchoringOrderAmount ,
        float                   $threshold ,
        array                   $conciliation ,
        array                   $cardOperations
    ): CardMovementsResponse
    {
        $movements = $this->finder->__invoke($cardNumber , $clientKey , $initialDate , $finalDate , $cardOperations);
        $movements = $this->removeExpenseTypeMovements($movements);
        $movements = $this->removeMovementsAlreadyReconciled($movements , $conciliation);
        $movements = $this->removeMovementsThatAreNotInThreshold($movements , $threshold , $anchoringOrderAmount);

        return new CardMovementsResponse($movements);
    }

    private function removeExpenseTypeMovements(array $movements): array
    {
        return array_filter($movements , function (array $movement) {
            return $movement['type'] !== 'Gasto';
        });
    }

    private function removeMovementsAlreadyReconciled(array $movements , array $conciliation): array
    {
        if(empty($conciliation)){
            return $movements;
        }

        $movements = array_filter($movements , function (array $movement) use ($conciliation) {
            foreach ($conciliation as $value) {
                return $value['conciliationNumber'] !== $movement['transactionId'];
            }
        });

        return Utils::removeDuplicateElements($movements);
    }

    private function removeMovementsThatAreNotInThreshold(
        array  $movements ,
        float  $threshold ,
        string $anchoringOrderAmount
    ): array
    {
        $anchoringOrderAmount = empty($anchoringOrderAmount) ? 0 : $anchoringOrderAmount;
        $minimumAmount = $anchoringOrderAmount - ($anchoringOrderAmount * ($threshold / 100));
        $movements = array_filter($movements , function (array $movement) use ($minimumAmount , $anchoringOrderAmount) {
            return $movement['amount'] >= $minimumAmount && $movement['amount'] <= $anchoringOrderAmount;
        });

        return Utils::removeDuplicateElements($movements);
    }
}