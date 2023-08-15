<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\create;

use Viabo\management\commercePay\application\find\CommercePayResponse;
use Viabo\management\commercePay\domain\CommercePay;
use Viabo\management\commercePay\domain\CommercePayAmount;
use Viabo\management\commercePay\domain\CommercePayApiAuthCode;
use Viabo\management\commercePay\domain\CommercePayApiReferenceNumber;
use Viabo\management\commercePay\domain\CommercePayClientName;
use Viabo\management\commercePay\domain\CommercePayCommerceId;
use Viabo\management\commercePay\domain\CommercePayCreatedByUser;
use Viabo\management\commercePay\domain\CommercePayDescription;
use Viabo\management\commercePay\domain\CommercePayEmail;
use Viabo\management\commercePay\domain\CommercePayPhone;
use Viabo\management\commercePay\domain\CommercePayRepository;
use Viabo\management\commercePay\domain\CommercePayTerminalId;

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
