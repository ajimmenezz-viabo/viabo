<?php declare(strict_types=1);


namespace Viabo\management\notifications\application\SendCardsMovementsNotifications;


use Viabo\shared\domain\email\Email;
use Viabo\shared\domain\email\EmailRepository;
use Viabo\shared\domain\utils\DatePHP;

final readonly class SendCardsMovements
{
    public function __construct(private EmailRepository $repository , private DatePHP $date)
    {
    }

    public function __invoke(
        string $ownerName ,
        string $ownerEmail ,
        string $cardNumber ,
        array  $movements
    ): void
    {
        if (empty($ownerEmail) || empty($movements)) {
            return;
        }

        $email = new Email(
            [$ownerEmail] ,
            "Notificación de Viabo - Resumen de Movimientos de Tarjeta" ,
            'management/notification/emails/summary.card.movements.today.html.twig' ,
            [
                'ownerName' => $ownerName ,
                'cardNumber' => $cardNumber ,
                'movements' => $movements ,
                'date' => $this->date->now()
            ]
        );

        $this->repository->send($email);
    }
}