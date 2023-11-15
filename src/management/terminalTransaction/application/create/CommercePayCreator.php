<?php declare(strict_types=1);

namespace Viabo\management\terminalTransaction\application\create;

use Viabo\management\terminalTransaction\application\find\CommercePayUrlCodeResponse;
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
use Viabo\management\terminalTransaction\domain\TerminalTransactionRepository;
use Viabo\management\terminalTransaction\domain\CommercePayTerminalId;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommercePayCreator
{
    public function __construct(private TerminalTransactionRepository $repository , private EventBus $bus)
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
            $amount,
            new CommercePayApiAuthCode(''),
            new CommercePayApiReferenceNumber('')
        );

        $this->repository->save($commercePay);

        $commercePay->setPayEventCreated();

        $this->bus->publish(...$commercePay->pullDomainEvents());

        return new CommercePayUrlCodeResponse(['code' => $commercePay->urlCode()->value()]);
    }
}
