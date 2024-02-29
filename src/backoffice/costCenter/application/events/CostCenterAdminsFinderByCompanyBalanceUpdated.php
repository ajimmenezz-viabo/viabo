<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\application\events;


use Viabo\backoffice\company\domain\events\CompanyBalanceDecreasedDomainEvent;
use Viabo\backoffice\company\domain\events\CompanyBalanceIncreasedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class CostCenterAdminsFinderByCompanyBalanceUpdated implements DomainEventSubscriber
{
    public function __construct(private CostCenterAdminsFinderByCompany $finder)
    {
    }

    public static function subscribedTo(): array
    {
        return [CompanyBalanceIncreasedDomainEvent::class, CompanyBalanceDecreasedDomainEvent::class];
    }

    public function __invoke(CompanyBalanceIncreasedDomainEvent|CompanyBalanceDecreasedDomainEvent $event): void
    {
        $company = $event->toPrimitives();
        $this->finder->__invoke($company);
    }
}