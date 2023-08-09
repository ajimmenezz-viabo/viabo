<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\update;

use Viabo\management\commercePay\domain\CommercePayStatusId;
use Viabo\management\commerceTransaction\domain\events\CommercePayTransactionCreatedDomainEvent;
use Viabo\management\shared\domain\commercePay\CommercePayId;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class UpdateCommercePayStatusByCommercePayTransactionCreated implements DomainEventSubscriber
{
    public function __construct(private CommercePayUpdater $updater)
    {
    }

    public static function subscribedTo(): array
    {
        return [CommercePayTransactionCreatedDomainEvent::class];
    }

    public function __invoke(CommercePayTransactionCreatedDomainEvent $event): void
    {
        $data = $event->toPrimitives();
        $id = new CommercePayId($data['commercePayId']);
        $statusId = new CommercePayStatusId($data['statusId']);

        $this->updater->__invoke($id , $statusId);
    }
}