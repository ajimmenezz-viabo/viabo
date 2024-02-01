<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class TransactionQueryByReference implements Query
{
    public function __construct(public int $referenceNumber)
    {
    }
}