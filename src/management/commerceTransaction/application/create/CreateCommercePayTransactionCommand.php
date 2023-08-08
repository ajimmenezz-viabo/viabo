<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\create;

use Viabo\shared\domain\bus\command\Command;

final readonly class CreateCommercePayTransactionCommand implements Command
{
    public function __construct(public string $operationId, public array $transaction)
    {
    }
}
