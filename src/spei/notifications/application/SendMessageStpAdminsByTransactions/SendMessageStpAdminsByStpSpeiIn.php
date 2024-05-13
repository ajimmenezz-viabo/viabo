<?php declare(strict_types=1);


namespace Viabo\spei\notifications\application\SendMessageStpAdminsByTransactions;


use Viabo\security\user\domain\events\StpAdminsEmailsFoundDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class SendMessageStpAdminsByStpSpeiIn implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [StpAdminsEmailsFoundDomainEvent::class];
    }

    public function __invoke(StpAdminsEmailsFoundDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $emails = $transaction['stpAdminsEmails'];

        if (empty($emails) || $transaction['additionalData']['stpOperationType'] !== 'speiIn') {
            return;
        }

        $email = new Email(
            $emails,
            "Notificación de SPEI IN - StpAdmins",
            'spei/notification/emails/stp.transaction.spei.in.html.twig',
            [
                'transactionType' => 'Operación SPEI Entrante',
                'statusName' => $transaction['statusName'],
                'sourceAccount' => $transaction['sourceAccount'],
                'sourceName' => $transaction['sourceName'],
                'destinationAccount' => $transaction['destinationAccount'],
                'destinationName' => $transaction['destinationName'],
                'destinationRfc' => $transaction['additionalData']['destinationRfc'],
                'destinationBankName' => $transaction['additionalData']['destinationBankName'],
                'amount' => $transaction['amountMoneyFormat'],
                'concept' => $transaction['concept'],
                'reference' => $transaction['stpId'],
                'date' => $transaction['liquidationDate']
            ]
        );
        $this->repository->send($email);

    }

}