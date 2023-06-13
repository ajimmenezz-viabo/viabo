<?php declare(strict_types=1);


namespace Viabo\management\notifications\application\SendCardSPEIKey;


use Viabo\management\notifications\domain\exceptions\NotificationDataEmpty;
use Viabo\management\notifications\domain\exceptions\NotificationEmailEmpty;
use Viabo\shared\domain\qr\QRCodeAdapter;
use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;

final readonly class SendCardSPEI
{
    public function __construct(private EmailRepository $repository , private QRCodeAdapter $qrCodeAdapter)
    {
    }

    public function __invoke(string $spei , string $paynet , array $emails): void
    {
        if (empty($emails)) {
            throw new NotificationEmailEmpty();
        }

        if (empty($spei) || empty($paynet)) {
            throw new NotificationDataEmpty();
        }

        $qr = $this->qrCodeAdapter->generator($paynet);
        $email = new Email(
            $emails ,
            "Notificación de Viabo - SPEI" ,
            'management/notification/emails/card.spei.key.html.twig' ,
            ['spei' => $spei , 'qr_paynet' => $qr]
        );

        $this->repository->send($email);
    }
}