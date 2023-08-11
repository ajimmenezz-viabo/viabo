<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\create;

use Viabo\management\commercePay\domain\events\CommercePayVirtualTerminalCreatedDomainEvent;
use Viabo\management\commerceTransaction\domain\CommercePayTransactionTypeId;
use Viabo\management\shared\domain\commercePay\CommercePayId;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class CreateCommerceTransactionByCommercePayVirtualTerminalCreated implements DomainEventSubscriber
{
    public function __construct(private CommercePayTransactionCreator $creator)
    {
    }
    public static function subscribedTo(): array
    {
        return [CommercePayVirtualTerminalCreatedDomainEvent::class];
    }

    public function __invoke(CommercePayVirtualTerminalCreatedDomainEvent $event):void
    {
        $commercePayData = $event->toPrimitives();
        $transactionData = $event->transactionData();

        $commercePayId = CommercePayId::create($commercePayData['id']);
        $commercePayData['merchantId'] = $transactionData['merchantId'];
        $commercePayData['apiKey'] = $transactionData['apiKey'];

        $transactionVirtualTerminalType = "2";
        $transactionTypeId = new CommercePayTransactionTypeId($transactionVirtualTerminalType);

        $this->creator->__invoke(
            $commercePayId ,
            $transactionTypeId,
            $commercePayData ,
            $transactionData
        );
    }
}
