<?php declare(strict_types=1);


namespace Viabo\security\notification\application\SendPasswordToUserCreatedByAssignedCard;


use Viabo\security\user\domain\events\UserCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class SendPasswordToUserCreatedByAssignedCard implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [UserCreatedDomainEvent::class];
    }

    public function __invoke(UserCreatedDomainEvent $event): void
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