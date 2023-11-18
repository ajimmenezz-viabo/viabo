<?php declare(strict_types=1);

namespace Viabo\management\terminalTransaction\application\create;

use Viabo\management\terminalTransaction\application\find\CommercePayResponse;
use Viabo\management\terminalTransaction\domain\CommercePay;
use Viabo\management\terminalTransaction\domain\CommercePayAmount;
use Viabo\management\terminalTransaction\domain\CommercePayClientName;
use Viabo\management\terminalTransaction\domain\CommercePayCommerceId;
use Viabo\management\terminalTransaction\domain\CommercePayCreatedByUser;
use Viabo\management\terminalTransaction\domain\CommercePayDescription;
use Viabo\management\terminalTransaction\domain\CommercePayEmail;
use Viabo\management\terminalTransaction\domain\CommercePayPhone;
use Viabo\management\terminalTransaction\domain\CommercePayTerminalId;
use Viabo\management\terminalTransaction\domain\TerminalTransactionRepository;

final readonly class CommercePayVirtualTerminalCreator
{
    public function __construct(private TerminalTransactionRepository $repository)
    {
    }

    public function __invoke(
        CommercePayCreatedByUser $userId ,
        CommercePayCommerceId    $commerceId ,
        CommercePayTerminalId    $terminalId ,
        CommercePayClientName    $clientName ,
        CommercePayEmail         $email ,
        CommercePayPhone         $phone ,
        CommercePayDescription   $description ,
        CommercePayAmount        $amount
    ): CommercePayResponse
    {
        $commercePayVirtualTerminal = CommercePay::create(
            $userId ,
            $commerceId ,
            $terminalId ,
            $clientName ,
            $email ,
            $phone ,
            $description ,
            $amount
        );

        $this->repository->save($commercePayVirtualTerminal);

        return new CommercePayResponse($commercePayVirtualTerminal->toArray());

    }
}
