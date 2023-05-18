<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\domain;


use Viabo\management\cardOperation\domain\events\CardOperationCreatedDomainEvent;
use Viabo\management\cardOperation\domain\events\CardOperationUpdateDomainEvent;
use Viabo\management\shared\domain\credential\CardCredentialClientKey;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class CardOperation extends AggregateRoot
{

    public function __construct(
        private CardOperationId                   $id ,
        private CardOperationTypeId               $typeId ,
        private CardOperationOrigin               $originCard ,
        private CardOperationDestination          $destinationCard ,
        private CardOperationPayTransactionId     $payTransactionId ,
        private CardOperationReverseTransactionId $reverseTransactionId ,
        private CardOperationDescriptionPay       $descriptionPay ,
        private CardOperationDescriptionReverse   $descriptionReverse ,
        private CardOperationBalance              $balance ,
        private CardOperationConcept              $concept ,
        private CardOperationPayData              $payData ,
        private CardOperationReverseData          $reverseData ,
        private CardOperationEmails               $emails ,
        private CardCredentialClientKey           $clientKey ,
        private CardOperationRegisterDate         $registerDate ,
        private CardOperationActive               $active
    )
    {
    }

    public static function create(
        CardOperationOrigin      $originCard ,
        CardOperationDestination $destinationCard ,
        CardOperationBalance     $balance ,
        CardOperationConcept     $concept ,
        CardOperationEmails      $emails ,
        CardCredentialClientKey  $clientKey
    ): static
    {
        return new static(
            CardOperationId::random() ,
            new CardOperationTypeId('1') ,
            $originCard ,
            $destinationCard ,
            new CardOperationPayTransactionId('') ,
            new CardOperationReverseTransactionId('') ,
            CardOperationDescriptionPay::create($destinationCard->last8Digits()) ,
            new CardOperationDescriptionReverse('') ,
            $balance ,
            $concept ,
            new CardOperationPayData('') ,
            new CardOperationReverseData('') ,
            $emails ,
            $clientKey ,
            CardOperationRegisterDate::todayDate() ,
            new CardOperationActive('1') ,
        );
    }

    public function clientKey(): CardCredentialClientKey
    {
        return $this->clientKey;
    }

    public function originCard(): CardOperationOrigin
    {
        return $this->originCard;
    }

    public function destinationCard(): CardOperationDestination
    {
        return $this->destinationCard;
    }

    public function amount(): CardOperationBalance
    {
        return $this->balance;
    }

    public function descriptionPay(): CardOperationDescriptionPay
    {
        return $this->descriptionPay;
    }

    public function descriptionReverse(): CardOperationDescriptionReverse
    {
        return $this->descriptionReverse;
    }

    public function setDescriptionReverse(): void
    {
        $this->descriptionReverse = $this->descriptionReverse->update($this->originCard->last8Digits());
    }

    public function updatePayData(array $payData): void
    {
        $this->payTransactionId = $this->payTransactionId->update(strval($payData['Auth_Code']));
        $this->payData = $this->payData->update($payData);
    }

    public function updateReverseData(array $reverseData): void
    {
        $this->reverseTransactionId = $this->reverseTransactionId->update(strval($reverseData['Auth_Code']));
        $this->reverseData = $this->reverseData->update($reverseData);
        $this->active = $this->active->update('0');
    }

    public function setEventCreated(): void
    {
        $this->record(new CardOperationCreatedDomainEvent(
            $this->id->value() , $this->toArray() , $this->emails->value()
        ));
    }

    public function setEventUpdate(): void
    {
        $this->record(new CardOperationUpdateDomainEvent(
            $this->id->value() , $this->toArray() , $this->emails->value()
        ));
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'typeId' => $this->typeId->value() ,
            'originCard' => $this->originCard->value() ,
            'destinationCard' => $this->destinationCard->value() ,
            'payTransactionId' => $this->payTransactionId->value() ,
            'reverseTransactionId' => $this->reverseTransactionId->value() ,
            'descriptionPay' => $this->descriptionPay->value() ,
            'descriptionReverse' => $this->descriptionReverse->value() ,
            'balance' => $this->balance->value() ,
            'concept' => $this->concept->value() ,
            'payData' => $this->payData->value() ,
            'reverseData' => $this->reverseData->value() ,
            'clientKey' => $this->clientKey->value() ,
            'registerDate' => $this->registerDate->value() ,
            'active' => $this->active->value()
        ];
    }
}