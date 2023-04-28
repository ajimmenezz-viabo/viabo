<?php declare(strict_types=1);


namespace Viabo\management\card\application\create;


use Viabo\management\card\domain\Card;
use Viabo\management\card\domain\CardCommerceId;
use Viabo\management\card\domain\CardCVV;
use Viabo\management\card\domain\CardExpirationDate;
use Viabo\management\card\domain\CardNumber;
use Viabo\management\card\domain\CardPaymentProcessorId;
use Viabo\management\card\domain\CardRecorderId;
use Viabo\management\card\domain\CardRepository;
use Viabo\management\card\domain\services\CardValidator;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CardCreator
{
    public function __construct(
        private CardRepository $repository ,
        private CardValidator  $validator ,
        private EventBus       $bus
    )
    {
    }

    public function __invoke(
        CardRecorderId         $cardRecorderId ,
        CardNumber             $cardNumber ,
        CardExpirationDate     $cardExpirationDate ,
        CardCVV                $cardCVV ,
        CardPaymentProcessorId $cardPaymentProcessorId ,
        CardCommerceId         $cardCommerceId
    ): void
    {
        $card = Card::create(
            $cardRecorderId ,
            $cardNumber ,
            $cardExpirationDate ,
            $cardCVV ,
            $cardPaymentProcessorId ,
            $cardCommerceId
        );

        $this->validator->ensureNotExist($card);

        $this->repository->save($card);

        $this->bus->publish(...$card->pullDomainEvents());
    }
}