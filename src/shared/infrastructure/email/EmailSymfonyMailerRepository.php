<?php


namespace Viabo\shared\infrastructure\email;


use Viabo\shared\domain\email\exceptions\EmailNotSend;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;

final readonly class EmailSymfonyMailerRepository implements EmailRepository
{
    public function __construct(private MailerInterface $mailer)
    {
    }

    public function send(Email $email): void
    {
        list($to , $subject , $template , $context) = $email->content();

        $email = (new TemplatedEmail())
            ->from('test@viabo.com.mx')
            ->to(...$to)
            ->subject($subject)
            ->htmlTemplate($template)
            ->context($context);

        try {
            $this->mailer->send($email);
        } catch (TransportExceptionInterface $exception) {
            throw new EmailNotSend($exception->getMessage());
        }
    }
}