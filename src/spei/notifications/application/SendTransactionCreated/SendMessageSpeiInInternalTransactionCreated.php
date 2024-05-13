<?php declare(strict_types=1);


namespace Viabo\spei\notifications\application\SendTransactionCreated;


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
            "Notificación Spei In - Transferencia Interna",
            'spei/notification/emails/spei.internal.transaction.html.twig',
            [
                'transactionType' => 'Operación SPEI Deposito',
                'sourceName' => $transaction['sourceName'],
                'sourceAccount' => $transaction['sourceAccount'],
                'sourceRfc' => $transaction['additionalData']['sourceRfc'],
                'destinationAccount' => $transaction['destinationAccount'],
                'destinationName' => $transaction['destinationName'],
                'destinationRfc' => $transaction['additionalData']['destinationRfc'],
                'amount' => $transaction['amountMoneyFormat'],
                'concept' => $transaction['concept'],
                'reference' => $transaction['reference'],
                'date' => $transaction['createDate']
            ]
        );

        $this->repository->send($email);
    }
}