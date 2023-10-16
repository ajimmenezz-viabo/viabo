<?php declare(strict_types=1);


namespace Viabo\security\notification\application\SendUserPasswordReset;


use Viabo\security\user\domain\events\UserPasswordResetDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;
use Viabo\shared\domain\utils\URL;

final readonly class SendUserPasswordReset implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [UserPasswordResetDomainEvent::class];
    }

    public function __invoke(UserPasswordResetDomainEvent $event): void
    {
        $userData = $event->toPrimitives();

        $userEmail = $userData['email'];
        $email = new Email(
            [$userEmail] ,
            'Notificación de Viabo - Restablecimiento de Password' ,
            'security/notification/emails/user.password.reset.html.twig' ,
            [
                'name' => $userData['name'] ,
                'password' => $userData['password'] ,
                'userEmail' => $userEmail ,
                'host' => URL::get() . "/auth/login"
            ]
        );
        $this->repository->send($email);
    }
}