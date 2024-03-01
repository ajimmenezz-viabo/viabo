<?php declare(strict_types=1);


namespace Viabo\backoffice\notification\application\SendMessageToCompanyAdminsBySpei;


use Viabo\backoffice\company\domain\events\CompanyAdminsFoundDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final class sendMessageToCompanyAdminsBySpeiOutUpdated implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [CompanyAdminsFoundDomainEvent::class];
    }

    public function __invoke(CompanyAdminsFoundDomainEvent $event): void
    {
        $company = $event->toPrimitives();
        $transaction = $company['transaction'];
        $emails = $this->companyAdminsEmails($company['users']);

        if (empty($emails)) {
            return;
        }

        $email = new Email(
            $emails,
            "Notificación Admins de SPEI OUT - Liquidado",
            'spei/notification/emails/admins.transaction.spei.out.updated.html.twig',
            [
                'transactionType' => 'Operación SPEI Liquidado',
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

    private function companyAdminsEmails(array $users)
    {
        $users = array_values(array_filter($users, function (array $user) {
            return $user['profileId'] === '3';
        }));

        return array_map(function (array $user) {
            return $user['email'];
        }, $users);
    }
}