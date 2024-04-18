<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\create_projection_by_register;


use Viabo\backoffice\users\domain\events\CompanyUserCreatedDomainEventOnRegisterCompany;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class CreateProjectionSubscriberByRegisterCompany implements DomainEventSubscriber
{
    public function __construct(private ProjectionCreatorByRegisterCompany $updater)
    {
    }

    public static function subscribedTo(): array
    {
        return [CompanyUserCreatedDomainEventOnRegisterCompany::class];
    }

    public function __invoke(CompanyUserCreatedDomainEventOnRegisterCompany $event): void
    {
        $this->updater->__invoke($event->toPrimitives());
    }
}