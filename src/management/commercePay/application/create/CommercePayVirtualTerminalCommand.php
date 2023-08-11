<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\create;

use Viabo\shared\domain\bus\command\Command;

final readonly class CommercePayVirtualTerminalCommand implements Command
{
    public function __construct(
        public string $userId,
        public string $commerceId,
        public string $terminalId,
        public string $amount,
        public string $description,
        public string $cardNumber,
        public string $expMonth,
        public string $expYear,
        public string $security,
        public string $clientName,
        public string $email,
        public string $phone,
        public string $merchantId,
        public string $apiKey
    ){
    }
}
