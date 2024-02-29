<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\application\events;


use Viabo\backoffice\company\domain\events\CompanyAdminsFoundDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class CostCenterAdminsFinderByTransactionUpdated implements DomainEventSubscriber
{
    public function __construct(private CostCenterAdminsFinderByCompany $finder)
    {
    }

    public static function subscribedTo(): array
    {
        return [CompanyAdminsFoundDomainEvent::class];
    }

    public function __invoke(CompanyAdminsFoundDomainEvent $event): void
    {
        $company = $event->toPrimitives();
        $company['isTransactionUpdate'] = true;
        $this->finder->__invoke($company);
    }
}