<?php declare(strict_types=1);


namespace Viabo\backoffice\projection\application\update_projection_users;


use Viabo\backoffice\users\domain\events\CompanyUserCreatedDomainEventOnAssign;
use Viabo\backoffice\users\domain\events\CompanyUsersCreatedDomainEventByAdminStp;
use Viabo\backoffice\users\domain\events\CompanyUsersUpdatedDomainEventByAdminStp;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class UpdateProjectionUsers implements DomainEventSubscriber
{
    public function __construct(private ProjectionUsersUpdater $updater)
    {
    }

    public static function subscribedTo(): array
    {
        return [
            CompanyUsersCreatedDomainEventByAdminStp::class,
            CompanyUsersUpdatedDomainEventByAdminStp::class,
            CompanyUserCreatedDomainEventOnAssign::class
        ];
    }

    public function __invoke(
        CompanyUsersCreatedDomainEventByAdminStp|
        CompanyUsersUpdatedDomainEventByAdminStp|
        CompanyUserCreatedDomainEventOnAssign $event
    ): void
    {
        $this->updater->__invoke($event->toPrimitives());
    }
}