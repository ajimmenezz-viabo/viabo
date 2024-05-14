<?php declare(strict_types=1);


namespace Viabo\security\notification\application\SendResetPasswordEmailByAssignedCardDemo;


use Viabo\security\user\domain\events\SendUserPasswordDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;
use Viabo\shared\domain\service\find_busines_template_file\BusinessTemplateFileFinder;

final readonly class SendRegisterDemoCardByAssignedCardDemo implements DomainEventSubscriber
{
    public function __construct(
        private EmailRepository $repository,
        private BusinessTemplateFileFinder $templateFileFinder
    )
    {
    }

    public static function subscribedTo(): array
    {
        return [SendUserPasswordDomainEvent::class];
    }

    public function __invoke(SendUserPasswordDomainEvent $event): void
    {
        $user = $event->toPrimitives();
        $templateFile = $this->templateFileFinder->__invoke($user['businessId']);
        $legalRepresentative = $event->legaRepresentative();
        $cardNumber = $event->cardNumber();

        $email = new Email(
            [$legalRepresentative['email']] ,
            'Notificación de Registro de tarjeta Demo' ,
            "security/$templateFile/notification/emails/registered.user.by.demo.card.html.twig" ,
            [
                'legalRepresentativeName' => $legalRepresentative['name'] ,
                'userName' => $user['name'] ,
                'userEmail' => $user['email'] ,
                'cardNumber' => $cardNumber
            ]
        );
        $this->repository->send($email);
    }
}