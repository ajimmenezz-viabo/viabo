<?php declare(strict_types=1);


namespace Viabo\security\user\application\events;


use Viabo\backoffice\company\domain\events\UnrelatedCompanyAccountDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class StpAdminsEmailsFinderBySpeiOutUpdated implements DomainEventSubscriber
{

    public function __construct(private StpAdminsEmailsFinderByTransactionUpdated $finder)
    {
    }

    public static function subscribedTo(): array
    {
        return [UnrelatedCompanyAccountDomainEvent::class];
    }

    public function __invoke(UnrelatedCompanyAccountDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $this->finder->__invoke($transaction);
    }
}