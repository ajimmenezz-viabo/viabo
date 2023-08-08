<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\create;

use Viabo\shared\domain\bus\command\Command;

final readonly class CreateCommercePayCommand implements Command
{
    public function __construct (
        public string $userId,
        public string $referenceId,
        public string $commerceId,
        public string $terminalId,
        public string $fullName,
        public string $email,
        public string $phone,
        public string $description,
        public string $amount
    )
    {
    }
}
