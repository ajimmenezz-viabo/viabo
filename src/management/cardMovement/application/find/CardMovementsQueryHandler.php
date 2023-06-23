<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\application\find;


use Viabo\management\cardMovement\domain\CardMovementFinalDate;
use Viabo\management\cardMovement\domain\CardMovementInitialDate;
use Viabo\management\shared\domain\card\CardClientKey;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CardMovementsQueryHandler implements QueryHandler
{
    public function __construct(private CardMovementsFinder $finder)
    {
    }

    public function __invoke(CardMovementsQuery $query): Response
    {
        $cardNumber = CardNumber::create($query->cardNumber);
        $initialDate = CardMovementInitialDate::create($query->initialDate);
        $finalDate = CardMovementFinalDate::create($query->finalDate);
        $clientKey = CardClientKey::create($query->clientKey);

        return $this->finder->__invoke(
            $cardNumber , $initialDate , $finalDate , $clientKey, $query->operations, $query->cardPaymentProcessorId
        );
    }
}