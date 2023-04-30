<?php declare(strict_types=1);


namespace Viabo\management\card\application\find;


use Viabo\shared\domain\bus\query\Response;

final readonly class StockCardsResponse implements Response
{
    public function __construct(public array $stockCards)
    {
    }
}