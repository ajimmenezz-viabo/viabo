<?php declare(strict_types=1);


namespace Viabo\backoffice\notification\application\SendMessageToCompanyAdminsBySpei;


use Viabo\backoffice\company\domain\events\CompanyBalanceIncreasedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final class sendMessageToCompanyAdminsBySpeiIn implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [CompanyBalanceIncreasedDomainEvent::class];
    }

    public function __invoke(CompanyBalanceIncreasedDomainEvent $event): void
    {
        $company = $event->toPrimitives();
        $transaction = $company['transaction'];
        $emails = $this->companyAdminsEmails($company['users']);

        if (empty($emails)) {
            return;
        }

        $email = new Email(
            $emails,
            "Notificación de SPEI IN - Admin",
            'spei/notification/emails/admins.transaction.spei.in.html.twig',
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