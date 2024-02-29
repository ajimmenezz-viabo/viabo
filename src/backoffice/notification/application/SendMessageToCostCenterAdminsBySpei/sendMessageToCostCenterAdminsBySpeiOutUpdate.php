<?php declare(strict_types=1);


namespace Viabo\backoffice\notification\application\SendMessageToCostCenterAdminsBySpei;


use Viabo\backoffice\costCenter\domain\events\CostCenterAdminsEmailsDomainEventByTransactionUpdated;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class sendMessageToCostCenterAdminsBySpeiOutUpdate implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [CostCenterAdminsEmailsDomainEventByTransactionUpdated::class];
    }

    public function __invoke(CostCenterAdminsEmailsDomainEventByTransactionUpdated $event): void
    {
        $company = $event->toPrimitives();
        $emails = $company['costCentersAdminsEmails'];

        if (empty($emails)) {
            return;
        }

        $costCenters = $this->costCentersNames($company['costCenters']);
        $email = new Email(
            $emails,
            "Notificación Cost Center de SPEI OUT - Actualizado",
            'spei/notification/emails/cost.centers.admins.transaction.spei.out.update.html.twig',
            [
                'costCenters' => implode(',', $costCenters),
                'company' => $company['fiscalName'],
                'account' => $company['destinationAccount'],
                'liquidationDate' => $company['liquidationDate'],
                'amount' => $company['balance']
            ]
        );
        $this->repository->send($email);

    }

    private function costCentersNames(array $costCenters): array
    {
        return array_map(function (array $costCenter) {
            return $costCenter['name'];
        }, $costCenters);
    }
}