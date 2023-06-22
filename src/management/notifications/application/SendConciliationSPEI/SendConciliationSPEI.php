<?php declare(strict_types=1);


namespace Viabo\management\notifications\application\SendConciliationSPEI;


use Viabo\management\conciliation\domain\events\ConciliationCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\qr\QRCodeAdapter;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class SendConciliationSPEI implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository , private QRCodeAdapter $qrCodeAdapter)
    {
    }

    public static function subscribedTo(): array
    {
        return [ConciliationCreatedDomainEvent::class];
    }

    public function __invoke(ConciliationCreatedDomainEvent $event): void
    {
        $conciliationData = $event->toPrimitives();
        $emails = explode(',' , $conciliationData['emails']);

        $email = new Email(
            $emails ,
            "Notificación de Viabo - Orden de Fondeo" ,
            'management/notification/emails/conciliation.spei.html.twig' ,
            [
                'spei' => $conciliationData['spei'] ,
                'amount' => $conciliationData['amount'] ,
                'referenceNumber' => $conciliationData['referenceNumber']
            ]
        );

        $this->repository->send($email);
    }
}