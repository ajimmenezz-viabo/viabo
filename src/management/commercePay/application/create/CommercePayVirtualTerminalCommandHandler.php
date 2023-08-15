<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\create;

use Viabo\management\commercePay\domain\CommercePayAmount;
use Viabo\management\commercePay\domain\CommercePayClientName;
use Viabo\management\commercePay\domain\CommercePayCommerceId;
use Viabo\management\commercePay\domain\CommercePayCreatedByUser;
use Viabo\management\commercePay\domain\CommercePayDescription;
use Viabo\management\commercePay\domain\CommercePayEmail;
use Viabo\management\commercePay\domain\CommercePayPhone;
use Viabo\management\commercePay\domain\CommercePayTerminalId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CommercePayVirtualTerminalCommandHandler implements QueryHandler
{
    public function __construct(private CommercePayVirtualTerminalCreator $creator)
    {
    }

    public function __invoke(CommercePayVirtualTerminalCommand $command):Response
    {
        $userId = CommercePayCreatedByUser::create($command->userId);
        $commerceId = CommercePayCommerceId::create($command->commerceId);
        $terminalId = CommercePayTerminalId::create($command->terminalId);
        $clientName = CommercePayClientName::create($command->clientName);
        $email = CommercePayEmail::create($command->email);
        $phone = new CommercePayPhone($command->phone);
        $description = new CommercePayDescription($command->description);
        $amount = CommercePayAmount::create($command->amount);

        return $this->creator->__invoke(
            $userId,
            $commerceId,
            $terminalId,
            $clientName,
            $email,
            $phone,
            $description,
            $amount
        );
    }
}
