<?php declare(strict_types=1);


namespace Viabo\backoffice\notification\application\SendMessageToCostCenterAdminsBySpei;


use Viabo\backoffice\costCenter\domain\events\CostCenterAdminsEmailsDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class sendMessageToCostCenterAdminsBySpeiOutNotRegistered implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [CostCenterAdminsEmailsDomainEvent::class];
    }

    public function __invoke(CostCenterAdminsEmailsDomainEvent $event): void
    {
        $company = $event->toPrimitives();
        $transaction = $company['transaction'];
        $emails = $company['costCentersAdminsEmails'];

        if (empty($emails) || !$company['isBalanceDecreased']) {
            return;
        }

        $email = new Email(
            $emails,
            "Notificación a Admins Centro de Costos de SPEI OUT - No reconocida",
            'spei/notification/emails/cost.centers.admins.transaction.spei.out.not.registered.html.twig',
            [
                'transactionType' => 'Operación SPEI No Reconocida',
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