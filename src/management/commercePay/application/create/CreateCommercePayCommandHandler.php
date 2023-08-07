<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\create;

use Viabo\management\commercePay\domain\CommercePayAmount;
use Viabo\management\commercePay\domain\CommercePayCommerceId;
use Viabo\management\commercePay\domain\CommercePayDescription;
use Viabo\management\commercePay\domain\CommercePayEmail;
use Viabo\management\commercePay\domain\CommercePayFullName;
use Viabo\management\commercePay\domain\CommercePayPhone;
use Viabo\management\commercePay\domain\CommercePayTerminalId;
use Viabo\management\commercePay\domain\CommercePayUserId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateCommercePayCommandHandler implements CommandHandler
{
    public function __construct (private CommercePayCreator $creator)
    {
    }

    public function __invoke (CreateCommercePayCommand $command):void
    {
        $userId = CommercePayUserId::create($command->userId);
        $commerceId = CommercePayCommerceId::create($command->commerceId);
        $terminalId = CommercePayTerminalId::create($command->terminalId);
        $fullName = CommercePayFullName::create($command->fullName);
        $email = CommercePayEmail::create($command->email);
        $phone = new CommercePayPhone($command->phone);
        $description = new CommercePayDescription($command->description);
        $amount = CommercePayAmount::create($command->amount);

        ($this->creator)($userId,$commerceId,$terminalId,$fullName,$email,$phone,$description,$amount);
    }
}
