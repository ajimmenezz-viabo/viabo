<?php declare(strict_types=1);


namespace Viabo\management\card\domain;


use Viabo\management\card\domain\events\AssignedCardDomaEventInCommerce;
use Viabo\management\card\domain\events\CardBlockUpdatedDomainEvent;
use Viabo\management\card\domain\events\CardCreatedDomainEvent;
use Viabo\management\card\domain\events\CardOwnerUpdatedDomainEvent;
use Viabo\management\shared\domain\card\CardClientKey;
use Viabo\management\shared\domain\card\CardCommerceId;
use Viabo\management\shared\domain\card\CardId;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Card extends AggregateRoot
{
    private CardCredentials $credentials;
    private CardInformation $information;

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
        $this->credentials = CardCredentials::empty();
        $this->information = CardInformation::empty();
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
            new CardExpirationMonth($cardExpirationDate->month()) ,
            new CardExpirationYear($cardExpirationDate->year()) ,
            $paymentProcessorId ,
            new CardStatusId('4') ,
            $cardCommerceId ,
            new CardOwnerId('') ,
            $cardRecorderId ,
            CardRegisterDate::todayDate() ,
            new CardActive('1')
        );

        $card->record(new CardCreatedDomainEvent($card->id()->value() , $card->toArray()));

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

    public function block(): CardBlock
    {
        return $this->information->blockStatus();
    }

    public function expirationDate(): CardExpirationDate
    {
        return $this->expirationDate;
    }

    public function cvv(): CardCVV
    {
        return $this->cvv;
    }

    public function assignIn(CardCommerceId $commerceId): void
    {
        $this->commerceId = $this->commerceId->update($commerceId->value());

        $this->record(new AssignedCardDomaEventInCommerce($this->id->value() , $this->toArray()));
    }

    public function assignTo(CardOwnerId $ownerId): void
    {
        $this->ownerId = $this->ownerId->update($ownerId->value());
    }

    public function registerCredentials(CardClientKey $clientKey , CardUser $user , CardPassword $password): void
    {
        $this->credentials = CardCredentials::create($clientKey , $user , $password);
    }

    public function credentials(): CardCredentials
    {
        return $this->credentials;
    }

    public function registerInformation(array $data): void
    {
        $this->information = CardInformation::create($data);
    }

    public function toInformationArray(): array
    {
        return $this->information->toArray();
    }

    public function lastDigits(): string
    {
        return $this->number->last8Digits();
    }

    public function updateBlock(CardBlock $blockStatus): void
    {
        if (empty($this->information)) {
            $this->information = CardInformation::empty();
        }
        $this->information->updateBlock($blockStatus);
        $this->record(new CardBlockUpdatedDomainEvent($this->id->value() , $this->toArray()));
    }

    public function updateOwner(CardOwnerId $ownerId , CardStatusId $statusId): void
    {
        $this->ownerId = $ownerId;
        $this->statusId = $statusId;
        $this->record(new CardOwnerUpdatedDomainEvent($this->id->value() , $this->toArray()));
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'number' => $this->number->value() ,
            'CVV' => $this->cvv->valueDecrypt() ,
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
