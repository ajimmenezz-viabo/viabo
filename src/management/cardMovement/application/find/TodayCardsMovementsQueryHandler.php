<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\application\find;


use Viabo\management\cardMovement\domain\CardMovementFinalDate;
use Viabo\management\cardMovement\domain\CardMovementInitialDate;
use Viabo\management\shared\domain\card\CardClientKey;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;
use Viabo\shared\domain\utils\DatePHP;
use Viabo\shared\domain\utils\NumberFormat;

final readonly class TodayCardsMovementsQueryHandler implements QueryHandler
{
    public function __construct(private CardMovementsFinder $finder , private DatePHP $date)
    {
    }

    public function __invoke(AddTodayCardsMovementsQuery $query): Response
    {
        $movements = array_map(function (array $card) {
            $cardNumber = CardNumber::create($card['number']);
            $initialDate = CardMovementInitialDate::create($this->date->now());
            $finalDate = CardMovementFinalDate::create("{$this->date->now()} 23:59:59");
            $clientKey = CardClientKey::create($card['clientKey']);
            $movements = $this->finder->__invoke(
                $cardNumber , $initialDate , $finalDate , $clientKey , $card['operationData']
            );
            $card['movements'] = $this->format($movements->data);
            return $card;
        } , $query->cards);
        return new CardMovementsResponse($movements);
    }

    private function format(array $movements): array
    {
        return array_map(function (array $movement) {
            $sing = $movement['type'] === 'Gasto' ? '-' : '+';
            $movement['amount'] = sprintf("%s %s" , $sing , NumberFormat::money(floatval($movement['amount'])));
            $movement['date'] = $this->date->formatDateTime($movement['date'] , 'd M Y H:i a');
            return $movement;
        } , $movements);
    }
}