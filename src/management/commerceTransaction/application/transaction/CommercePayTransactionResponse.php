<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\transaction;

use Viabo\shared\domain\bus\query\Response;

final readonly class CommercePayTransactionResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}
