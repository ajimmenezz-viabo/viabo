<?php declare(strict_types=1);


namespace Viabo\management\notifications\application\SendCardTransactionInMainBinEmail;


use Viabo\management\cardOperation\domain\events\CardOperationCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class SendCardTransactionInMainBinEmail implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [CardOperationCreatedDomainEvent::class];
    }

    public function __invoke(CardOperationCreatedDomainEvent $event): void
    {
        $transactionData = $event->toPrimitives();
        $emails = $event->emails();

        $email = new Email(
            [$emails],
            'Notificación de Transferencia',
            'management/notification/emails/card.transaction.main.bin.html.twig',
            [
                'originCard' => substr($transactionData['originCard'] , -8),
                'destinationCard' => substr($transactionData['destinationCard'] , -8),
                'balance' => $transactionData['balance'],
                'registerDate' => $transactionData['registerDate'],
                'referencia' => $transactionData['payTransactionId']
            ]
        );
        $this->repository->send($email);
    }
}