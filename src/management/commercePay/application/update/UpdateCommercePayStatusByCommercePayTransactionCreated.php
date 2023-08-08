<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\update;

use Viabo\management\commercePay\domain\CommercePayId;
use Viabo\management\commercePay\domain\CommercePayStatusId;
use Viabo\management\commerceTransaction\domain\events\CommercePaytransactionCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class UpdateCommercePayStatusByCommercePayTransactionCreated implements DomainEventSubscriber
{
    public function __construct(private CommercePayUpdater $updater)
    {
    }

    public static function subscribedTo(): array
    {
        return [CommercePaytransactionCreatedDomainEvent::class];
    }

    public function __invoke(CommercePaytransactionCreatedDomainEvent $event):void
    {
        $data = $event->toPrimitives();
        $id = new CommercePayId($data['id']);
        $statusId = new CommercePayStatusId($data['statusId']);

        ($this->updater)($id,$statusId);
    }
}
