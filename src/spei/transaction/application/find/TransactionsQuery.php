<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class TransactionsQuery implements Query
{
    public function __construct(
        public string $initialDate,
        public string $endDate,
        public string $account,
        public int    $limit
    )
    {
    }
}