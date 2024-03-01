<?php declare(strict_types=1);


namespace Viabo\backoffice\notification\application\SendMessageToStpAdminsBySpei;


use Viabo\security\user\domain\events\StpAdminsEmailsDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class sendMessageToStpAdminsBySpeiIn implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [StpAdminsEmailsDomainEvent::class];
    }

    public function __invoke(StpAdminsEmailsDomainEvent $event): void
    {
        $transaction = $event->toPrimitives();
        $emails = $transaction['stpAdminsEmails'];
        if (empty($emails) || !$transaction['isSpeiIn']) {
            return;
        }

        $email = new Email(
            $emails,
            "Notificación de SPEI IN - StpAdmins",
            'spei/notification/emails/stp.admins.transaction.spei.in.html.twig',
            [
                'transactionType' => 'Operación SPEI Entrante',
                'amount' => $transaction['amountMoneyFormat'],
                'concept' => $transaction['concept'],
                'sourceAccount' => $transaction['sourceAccount'],
                'destinationAccount' => $transaction['destinationAccount'],
                'reference' => $transaction['stpId'],
                'date' => $transaction['liquidationDate']
            ]
        );
        $this->repository->send($email);

    }

}