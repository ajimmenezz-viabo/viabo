<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\application\find;


use Viabo\management\cardMovement\domain\CardMovementFinalDate;
use Viabo\management\cardMovement\domain\CardMovementInitialDate;
use Viabo\management\shared\domain\card\CardClientKey;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class UnreconciledMasterCardMovementsQueryHandler implements QueryHandler
{
    public function __construct(private UnreconciledMasterCardMovementsFinder $finder)
    {
    }

    public function __invoke(UnreconciledMasterCardMovementsQuery $query): Response
    {
        $cardNumber = CardNumber::create($query->cardNumber);
        $initialDate = CardMovementInitialDate::create($query->anchoringOrderRegisterDate);
        $finalDate = CardMovementFinalDate::todayDate();
        $clientKey = CardClientKey::create($query->clientKey);

        return $this->finder->__invoke(
            $cardNumber,
            $initialDate,
            $finalDate,
            $clientKey,
            $query->anchoringOrderAmount,
            $query->threshold,
            $query->conciliation,
            $query->cardOperations
        );
    }
}