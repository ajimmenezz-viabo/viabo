<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update_projection_users_by_register;


use Viabo\backoffice\users\domain\events\CompanyUserCreatedDomainEventOnRegisterCompany;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class UpdateProjectionUsersByRegisterCompany implements DomainEventSubscriber
{
    public function __construct(private ProjectionUsersUpdaterByRegisterCompany $updater)
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