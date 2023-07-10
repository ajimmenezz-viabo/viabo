<?php declare(strict_types=1);


namespace Viabo\security\notification\application\SendResetPasswordEmailByAssignedCardDemo;


use Viabo\security\user\domain\events\SendUserPasswordDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class SendResetPasswordEmailByAssignedCardDemo implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [SendUserPasswordDomainEvent::class];
    }

    public function __invoke(SendUserPasswordDomainEvent $event): void
    {
        $userData = $event->toPrimitives();
        $password = $event->password();

        $userEmail = $userData['email'];
        $email = new Email(
            [$userEmail] ,
            'Notificación de Acceso a Viabo' ,
            'security/notification/emails/user.created.by.assigned.card.html.twig' ,
            ['name' => $userData['name'] , 'password' => $password, 'userEmail' => $userEmail]
        );
        $this->repository->send($email);
    }
}