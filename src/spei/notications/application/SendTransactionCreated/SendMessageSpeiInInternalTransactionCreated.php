<?php declare(strict_types=1);


namespace Viabo\spei\notications\application\SendTransactionCreated;


use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;
use Viabo\spei\transaction\domain\events\InternalSpeiInTransactionCreatedDomainEvent;

final readonly class SendMessageSpeiInInternalTransactionCreated implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [InternalSpeiInTransactionCreatedDomainEvent::class];
    }

    public function __invoke(InternalSpeiInTransactionCreatedDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $emails = explode(',', $transaction['destinationEmail']);

        if (empty($emails)) {
            return;
        }

        $email = new Email(
            $emails,
            "Notificación de Viabo Spei - Transferencia",
            'spei/notification/emails/spei.in.internal.transaction.html.twig',
            [
                'transactionType' => 'Operación SPEI Deposito',
                'amount' => $transaction['amountMoneyFormat'],
                'concept' => $transaction['concept'],
                'sourceAccount' => $transaction['sourceAccount'],
                'destinationAccount' => $transaction['destinationAccount'],
                'reference' => $transaction['reference'],
                'date' => $transaction['createDate']
            ]
        );

        $this->repository->send($email);
    }
}