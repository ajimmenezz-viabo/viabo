<?php declare(strict_types=1);


namespace Viabo\backoffice\notification\application\SendCostCenterAdminsBySpeiIn;


use Viabo\backoffice\costCenter\domain\events\CostCenterAdminsEmailsDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class sendCostCenterAdminsBySpeiIn implements DomainEventSubscriber
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
        $emails = $company['costCentersAdminsEmails'];

        if (empty($emails)) {
            return;
        }

        $costCenters = $this->costCentersNames($company['costCenters']);
        $email = new Email(
            $emails,
            "Notificación de SPEI IN",
            'spei/notification/emails/cost.centers.transaction.spei.in.html.twig',
            [
                'company' => $company['fiscalName'],
                'balanceOld' => $company['balanceOld'],
                'balance' => $company['balance'],
                'costCenters' => implode(',', $costCenters)
            ]
        );
        $this->repository->send($email);

    }

    private function costCentersNames(array $costCenters): array
    {
        return array_map(function (array $costCenter) {
           return $costCenter['name'] ;
        }, $costCenters);
    }
}