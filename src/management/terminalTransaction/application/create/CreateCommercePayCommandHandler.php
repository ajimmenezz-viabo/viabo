<?php declare(strict_types=1);

namespace Viabo\management\terminalTransaction\application\create;

use Viabo\management\terminalTransaction\domain\CommercePayAmount;
use Viabo\management\terminalTransaction\domain\CommercePayClientName;
use Viabo\management\terminalTransaction\domain\CommercePayCommerceId;
use Viabo\management\terminalTransaction\domain\CommercePayCreatedByUser;
use Viabo\management\terminalTransaction\domain\CommercePayDescription;
use Viabo\management\terminalTransaction\domain\CommercePayEmail;
use Viabo\management\terminalTransaction\domain\CommercePayPhone;
use Viabo\management\terminalTransaction\domain\CommercePayTerminalId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CreateCommercePayCommandHandler implements QueryHandler
{
    public function __construct(private CommercePayCreator $creator)
    {
    }

    public function __invoke(CreateCommercePayCommand $command): Response
    {
        $userId = CommercePayCreatedByUser::create($command->userId);
        $commerceId = CommercePayCommerceId::create($command->commerceId);
        $terminalId = CommercePayTerminalId::create($command->terminalId);
        $clientName = CommercePayClientName::create($command->clientName);
        $email = CommercePayEmail::create($command->email);
        $phone = new CommercePayPhone($command->phone);
        $description = new CommercePayDescription($command->description);
        $amount = CommercePayAmount::create($command->amount);

        return ($this->creator)(
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
