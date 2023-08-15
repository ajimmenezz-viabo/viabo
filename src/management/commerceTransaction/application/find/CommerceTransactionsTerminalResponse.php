<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\find;

use Viabo\shared\domain\bus\query\Response;

final readonly class CommerceTransactionsTerminalResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}
