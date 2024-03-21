<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\events;


use Viabo\backoffice\company\domain\events\CompanyBalanceUpdatedDomainEventByInternalTransaction;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;

final readonly class CreateTransactionSpeiInByInternalTransaction implements DomainEventSubscriber
{
    public function __construct(private TransactionSpeiInCreatorByInternalTransaction $creator)
    {
    }

    public static function subscribedTo(): array
    {
        return [CompanyBalanceUpdatedDomainEventByInternalTransaction::class];
    }

    public function __invoke(CompanyBalanceUpdatedDomainEventByInternalTransaction $event): void
    {
        $transaction = $event->toPrimitives();
        $this->creator->__invoke($transaction);
    }
}