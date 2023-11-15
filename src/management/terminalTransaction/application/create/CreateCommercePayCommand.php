<?php declare(strict_types=1);

namespace Viabo\management\terminalTransaction\application\create;

use Viabo\shared\domain\bus\query\Query;

final readonly class CreateCommercePayCommand implements Query
{
    public function __construct (
        public string $userId,
        public string $commerceId,
        public string $terminalId,
        public string $clientName,
        public string $email,
        public string $phone,
        public string $description,
        public string $amount
    )
    {
    }
}
