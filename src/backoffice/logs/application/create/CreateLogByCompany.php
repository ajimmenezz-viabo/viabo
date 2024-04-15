<?php declare(strict_types=1);


namespace Viabo\backoffice\logs\application\create;


use Viabo\backoffice\company\domain\events\CommerceUpdatedDomainEvent;
use Viabo\backoffice\company\domain\events\CompanyCreatedDomainEventByAdminCreatedOnRegisterCompany;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class CreateLogByCompany implements DomainEventSubscriber
{

    public function __construct(private LogCreator $creator)
    {
    }

    public static function subscribedTo(): array
    {
        return [CompanyCreatedDomainEventByAdminCreatedOnRegisterCompany::class,CommerceUpdatedDomainEvent::class];
    }

    public function __invoke(CompanyCreatedDomainEventByAdminCreatedOnRegisterCompany|CommerceUpdatedDomainEvent $event): void
    {
        $aggregateId = $event->aggregateId();
        $data = $event->toPrimitives();
        $type = $event->eventName();

        $this->creator->__invoke($aggregateId , $type, $data);
    }
}