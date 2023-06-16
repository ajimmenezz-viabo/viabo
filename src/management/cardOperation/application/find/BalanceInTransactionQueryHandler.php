<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\application\find;


use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class BalanceInTransactionQueryHandler implements QueryHandler
{
    public function __construct(private BalanceInTransactionFinder $finder)
    {
    }

    public function __invoke(BalanceInTransactionQuery $query): Response
    {
        $cardId = CardNumber::create($query->cardNumber);

        return $this->finder->__invoke($cardId);
    }
}