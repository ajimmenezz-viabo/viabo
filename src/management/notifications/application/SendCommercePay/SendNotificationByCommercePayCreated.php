<?php declare(strict_types=1);

namespace Viabo\management\notifications\application\SendCommercePay;

use Viabo\management\commercePay\domain\events\CommercePayCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;
use Viabo\shared\domain\utils\URL;

final readonly class SendNotificationByCommercePayCreated implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository, private URL $host)
    {
    }

    public static function subscribedTo(): array
    {
        return [CommercePayCreatedDomainEvent::class];
    }

    public function __invoke(CommercePayCreatedDomainEvent $event):void
    {
        $data = $event->toPrimitives();
        $host = $this->host::get();
        $data['url'] = $host."/viabo-pay/".$data['urlCode'];
        $data['privacityUrl'] = $host;

        $emails = $event->email();
        $email = new Email(
             [$emails],
            "Notificación de ViaboPay - Enlace de pago" ,
            'management/notification/emails/commerce.pay.notification.html.twig' ,
            [
                'fullName' => $data['fullName'],
                'url' => $data['url'],
                'amount' => $data['amount'],
                'description' => $data['description'],
                'privacityUrl' => $data['privacityUrl']
            ]
        );

        $this->repository->send($email);
    }
}
