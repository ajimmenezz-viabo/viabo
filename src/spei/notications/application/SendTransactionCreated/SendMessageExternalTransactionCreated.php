<?php declare(strict_types=1);


namespace Viabo\spei\notications\application\SendTransactionCreated;


use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;
use Viabo\spei\transaction\domain\events\ExternalTransactionCreatedDomainEvent;

final readonly class SendMessageExternalTransactionCreated implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [ExternalTransactionCreatedDomainEvent::class];
    }

    public function __invoke(ExternalTransactionCreatedDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $email = $transaction['destinationEmail'];

        if(empty($email)){
            return;
        }

        $email = new Email(
            [$email] ,
            "Notificación de Viabo Spei - Transferencia" ,
            'spei/notification/emails/spei.out.external.transaction.html.twig' ,
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