<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class FinishedConciliationQuery implements Query
{
    public function __construct(public string $cardId)
    {
    }
}