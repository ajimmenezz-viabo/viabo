<?php declare(strict_types=1);


namespace Viabo\security\notification\application\SendPasswordToUserCreatedByAssignedCard;


use Viabo\security\user\domain\events\UserCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;
use Viabo\shared\domain\service\find_busines_template_file\BusinessTemplateFileFinder;
use Viabo\shared\domain\utils\URL;

final readonly class SendPasswordToUserCreatedByAssignedCard implements DomainEventSubscriber
{
    public function __construct(
        private EmailRepository $repository,
        private BusinessTemplateFileFinder $templateFileFinder
    )
    {
    }

    public static function subscribedTo(): array
    {
        return [UserCreatedDomainEvent::class];
    }

    public function __invoke(UserCreatedDomainEvent $event): void
    {
        $userData = $event->toPrimitives();
        $templateFile = $this->templateFileFinder->__invoke($userData['businessId']);
        $password = $event->password();

        $userEmail = $userData['email'];
        $email = new Email(
            [$userEmail] ,
            'Notificación de Acceso a Viabo' ,
            "security/$templateFile/notification/emails/user.created.by.assigned.card.html.twig" ,
            [
                'name' => $userData['name'] ,
                'password' => $password ,
                'userEmail' => $userEmail ,
                'host' => URL::get() . "/auth/login"
            ]
        );
        $this->repository->send($email);
    }
}