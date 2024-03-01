<?php declare(strict_types=1);


namespace Viabo\spei\notications\application\SendTransactionCreated;


use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;
use Viabo\spei\transaction\domain\events\TransactionCreatedDomainEvent;

final readonly class SendTransactionCreated implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [TransactionCreatedDomainEvent::class];
    }

    public function __invoke(TransactionCreatedDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $email = $transaction['destinationEmail'];

        if(empty($email)){
            return;
        }

        $email = new Email(
            [$email] ,
            "Notificación de Viabo Spei - Transferencia" ,
            'spei/notification/emails/transaction.spei.html.twig' ,
            [
                'transactionType' => 'Operación SPEI Deposito',
                'amount' => $transaction['amountMoneyFormat'],
                'concept' => $transaction['concept'],
                'sourceAccount' => $transaction['sourceAccount'],
                'destinationAccount' => $transaction['destinationAccount'],
                'reference' => $transaction['trackingKey'],
                'date' => $transaction['createDate']
            ]
        );

        $this->repository->send($email);
    }
}