<?php declare(strict_types=1);

namespace Viabo\management\terminalTransaction\application\create;

use Viabo\management\terminalTransaction\application\find\CommercePayResponse;
use Viabo\management\terminalTransaction\domain\CommercePay;
use Viabo\management\terminalTransaction\domain\CommercePayAmount;
use Viabo\management\terminalTransaction\domain\CommercePayApiAuthCode;
use Viabo\management\terminalTransaction\domain\CommercePayApiReferenceNumber;
use Viabo\management\terminalTransaction\domain\CommercePayClientName;
use Viabo\management\terminalTransaction\domain\CommercePayCommerceId;
use Viabo\management\terminalTransaction\domain\CommercePayCreatedByUser;
use Viabo\management\terminalTransaction\domain\CommercePayDescription;
use Viabo\management\terminalTransaction\domain\CommercePayEmail;
use Viabo\management\terminalTransaction\domain\CommercePayPhone;
use Viabo\management\terminalTransaction\domain\CommercePayRepository;
use Viabo\management\terminalTransaction\domain\CommercePayTerminalId;

final readonly class CommercePayVirtualTerminalCreator
{
    public function __construct(private CommercePayRepository $repository)
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
            $amount,
            new CommercePayApiAuthCode(''),
            new CommercePayApiReferenceNumber('')
        );

        $this->repository->save($commercePayVirtualTerminal);

        return new CommercePayResponse($commercePayVirtualTerminal->toArray());

    }
}
