<?php declare(strict_types=1);


namespace Viabo\backoffice\services\application\events;


use Viabo\backoffice\company\domain\events\CompanyDeletedDomainEvent;
use Viabo\backoffice\services\application\create\ServicesCreator;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final class DeleteServicesByCompanyDeleted implements DomainEventSubscriber
{
    public function __construct(private ServicesDeleter $deleter)
    {
    }

    public static function subscribedTo(): array
    {
        return [CompanyDeletedDomainEvent::class];
    }

    public function __invoke(CompanyDeletedDomainEvent $event): void
    {
        $companyId = $event->aggregateId();
        $this->deleter->__invoke($companyId);
    }
}