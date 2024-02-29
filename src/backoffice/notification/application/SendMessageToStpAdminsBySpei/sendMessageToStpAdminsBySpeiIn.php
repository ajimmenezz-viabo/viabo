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
            "Notificación de SPEI IN",
            'spei/notification/emails/stp.admins.transaction.spei.in.html.twig',
            ['account' => $transaction['destinationAccount'], 'amount' => $transaction['amountMoneyFormat']]
        );
        $this->repository->send($email);

    }

}