<?php declare(strict_types=1);


namespace Viabo\management\notifications\application\SendFundingOrder;


use Viabo\management\fundingOrder\domain\events\FundingOrderCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class SendFundingOrder implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [FundingOrderCreatedDomainEvent::class];
    }

    public function __invoke(FundingOrderCreatedDomainEvent $event): void
    {
        $conciliationData = $event->toPrimitives();
        $emails = explode(',' , $conciliationData['emails']);

        $email = new Email(
            $emails ,
            "Notificación de Viabo - Orden de Fondeo" ,
            'management/notification/emails/funding.order.spei.html.twig' ,
            [
                'spei' => $conciliationData['spei'] ,
                'amount' => $conciliationData['amountFormat'] ,
                'referenceNumber' => $conciliationData['referenceNumber'] ,
                'referencePayCash' => $conciliationData['referencePayCash'] ,
                'urlPayCashFormat' => $conciliationData['instructionsUrls']['format'] ?? '' ,
                'urlPayCashDownload' => $conciliationData['instructionsUrls']['download'] ?? ''
            ]
        );

        $this->repository->send($email);
    }
}