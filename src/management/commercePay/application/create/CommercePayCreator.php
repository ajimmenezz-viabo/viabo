<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\create;

use Viabo\management\commercePay\domain\CommercePay;
use Viabo\management\commercePay\domain\CommercePayAmount;
use Viabo\management\commercePay\domain\CommercePayCommerceId;
use Viabo\management\commercePay\domain\CommercePayDescription;
use Viabo\management\commercePay\domain\CommercePayEmail;
use Viabo\management\commercePay\domain\CommercePayFullName;
use Viabo\management\commercePay\domain\CommercePayPhone;
use Viabo\management\commercePay\domain\CommercePayReferenceId;
use Viabo\management\commercePay\domain\CommercePayRepository;
use Viabo\management\commercePay\domain\CommercePayTerminalId;
use Viabo\management\commercePay\domain\CommercePayCreatedByUser;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CommercePayCreator
{
    public function __construct (private CommercePayRepository $repository, private EventBus $bus)
    {
    }

    public function __invoke (
        CommercePayCreatedByUser $userId,
        CommercePayReferenceId   $referenceId,
        CommercePayCommerceId    $commerceId,
        CommercePayTerminalId    $terminalId,
        CommercePayFullName      $fullName,
        CommercePayEmail         $email,
        CommercePayPhone         $phone,
        CommercePayDescription   $description,
        CommercePayAmount        $amount
    ):void
    {
        $commercePay = CommercePay::create(
            $userId,
            $referenceId,
            $commerceId,
            $terminalId,
            $fullName,
            $email,
            $phone,
            $description,
            $amount
        );

        $this->repository->save($commercePay);

        $this->bus->publish(...$commercePay->pullDomainEvents());
    }
}
