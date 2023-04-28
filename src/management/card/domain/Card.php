<?php declare(strict_types=1);


namespace Viabo\management\card\domain;


use Viabo\management\card\domain\events\CardCreatedDomainEvent;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Card extends AggregateRoot
{
    public function __construct(
        private CardId                 $id ,
        private CardNumber             $number ,
        private CardCVV                $cvv ,
        private CardExpirationDate     $expirationDate ,
        private CardExpirationMonth    $expirationMonth ,
        private CardExpirationYear     $expirationYear ,
        private CardPaymentProcessorId $paymentProcessorId ,
        private CardStatusId           $statusId ,
        private CardCommerceId         $commerceId ,
        private CardOwnerId            $ownerId ,
        private CardRecorderId         $recorderId ,
        private CardRegisterDate       $registerDate ,
        private CardActive             $active
    )
    {
    }

    public static function create(
        CardRecorderId         $cardRecorderId ,
        CardNumber             $cardNumber ,
        CardExpirationDate     $cardExpirationDate ,
        CardCVV                $cardCVV ,
        CardPaymentProcessorId $paymentProcessorId ,
        CardCommerceId         $cardCommerceId
    ): static
    {
        $card = new self(
            CardId::random() ,
            $cardNumber ,
            $cardCVV ,
            $cardExpirationDate ,
            new CardExpirationMonth($cardExpirationDate->month()),
            new CardExpirationYear($cardExpirationDate->year()),
            $paymentProcessorId ,
            new CardStatusId('1') ,
            $cardCommerceId ,
            new CardOwnerId('') ,
            $cardRecorderId ,
            CardRegisterDate::todayDate() ,
            new CardActive('1')
        );

        $card->record(new CardCreatedDomainEvent(
            $cardRecorderId->value() , $card->id()->value() , $card->toArray()
        ));

        return $card;
    }

    public function id(): CardId
    {
        return $this->id;
    }

    public function number(): CardNumber
    {
        return $this->number;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'number' => $this->number->value() ,
            'CVV' => $this->cvv->value() ,
            'expirationDate' => $this->expirationDate->value() ,
            'expirationMonth' => $this->expirationMonth->value() ,
            'expirationYear' => $this->expirationYear->value() ,
            'paymentProcessorId' => $this->paymentProcessorId->value() ,
            'statusId' => $this->statusId->value() ,
            'commerceId' => $this->commerceId->value() ,
            'ownerId' => $this->ownerId->value() ,
            'recorderId' => $this->recorderId->value() ,
            'register' => $this->registerDate->value() ,
            'active' => $this->active->value()
        ];
    }
}