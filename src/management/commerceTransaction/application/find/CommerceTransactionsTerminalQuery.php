<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\find;

use Viabo\shared\domain\bus\query\Query;

final readonly class CommerceTransactionsTerminalQuery implements Query
{

    public function __construct(
        public string $fromDate,
        public string $toDate,
        public string $merchantId,
        public string $terminalId,
        public string $apiKey,
        public ?string $page,
        public ?string $pageSize
    )
    {
    }
}
