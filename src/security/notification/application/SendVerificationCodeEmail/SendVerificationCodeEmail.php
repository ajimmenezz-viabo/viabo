<?php declare(strict_types=1);


namespace Viabo\security\notification\application\SendVerificationCodeEmail;


use Viabo\security\code\domain\events\CodeCreatedDomainEvent;
use Viabo\shared\domain\bus\event\DomainEventSubscriber;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class SendVerificationCodeEmail implements DomainEventSubscriber
{
    public function __construct(private EmailRepository $repository)
    {
    }

    public static function subscribedTo(): array
    {
        return [CodeCreatedDomainEvent::class];
    }

    public function __invoke(CodeCreatedDomainEvent $event): void
    {
        $userData = $event->toPrimitives();

        $email = new Email(
            [$userData['email']],
            'Verificación de Registro Viabo',
            'security/notification/emails/verification.code.html.twig',
            [
                'name' => "{$userData['name']} {$userData['lastname']}",
                'code' => $userData['code']
            ]
        );
        $this->repository->send($email);
    }
}