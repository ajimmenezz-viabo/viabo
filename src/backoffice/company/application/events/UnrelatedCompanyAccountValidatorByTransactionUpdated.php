<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\events;


use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\spei\transaction\domain\events\TransactionUpdatedBySpeiOutDomainEvent;

final readonly class UnrelatedCompanyAccountValidatorByTransactionUpdated implements DomainEventSubscriber
{
    public function __construct(private UnrelatedCompanyAccountValidator $validator)
    {
    }

    public static function subscribedTo(): array
    {
        return [TransactionUpdatedBySpeiOutDomainEvent::class];
    }

    public function __invoke(TransactionUpdatedBySpeiOutDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $this->validator->__invoke($transaction);
    }
}