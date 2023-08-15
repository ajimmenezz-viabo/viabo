<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\find;

use Viabo\shared\domain\bus\query\Query;

final readonly class CommerceTransactionQuery implements Query
{
    public function __construct(public string $transactionId)
    {
    }
}
