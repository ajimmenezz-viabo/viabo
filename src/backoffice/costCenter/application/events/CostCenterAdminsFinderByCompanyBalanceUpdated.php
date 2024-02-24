<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\application\events;


use Viabo\backoffice\company\domain\events\CompanyBalanceUpdatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class CostCenterAdminsFinderByCompanyBalanceUpdated implements DomainEventSubscriber
{
    public function __construct(private CostCenterAdminsFinderByCompany $finder)
    {
    }

    public static function subscribedTo(): array
    {
        return [CompanyBalanceUpdatedDomainEvent::class];
    }

    public function __invoke(CompanyBalanceUpdatedDomainEvent $event): void
    {
        $company = $event->toPrimitives();
        $this->finder->__invoke($company);
    }
}