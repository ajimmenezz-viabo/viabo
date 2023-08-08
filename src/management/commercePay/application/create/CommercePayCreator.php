<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\create;

use Viabo\management\commercePay\application\find\CommercePayUrlCodeResponse;
use Viabo\management\commercePay\domain\CommercePay;
use Viabo\management\commercePay\domain\CommercePayAmount;
use Viabo\management\commercePay\domain\CommercePayCommerceId;
use Viabo\management\commercePay\domain\CommercePayDescription;
use Viabo\management\commercePay\domain\CommercePayEmail;
use Viabo\management\commercePay\domain\CommercePayClientName;
use Viabo\management\commercePay\domain\CommercePayPhone;
use Viabo\management\commercePay\domain\CommercePayRepository;
use Viabo\management\commercePay\domain\CommercePayTerminalId;
use Viabo\management\commercePay\domain\CommercePayCreatedByUser;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommercePayCreator
{
    public function __construct(private CommercePayRepository $repository , private EventBus $bus)
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
    ): CommercePayUrlCodeResponse
    {
        $commercePay = CommercePay::create(
            $userId ,
            $commerceId ,
            $terminalId ,
            $clientName ,
            $email ,
            $phone ,
            $description ,
            $amount
        );

        $this->repository->save($commercePay);

        $this->bus->publish(...$commercePay->pullDomainEvents());

        return new CommercePayUrlCodeResponse(['code' => $commercePay->urlCode()->value()]);
    }
}
