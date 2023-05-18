<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\domain;


use Viabo\management\cardOperation\domain\events\CardOperationCreatedDomainEvent;
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
        private CardOperationStatus               $status
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
            new CardOperationStatus('1') ,
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

    public function amount(): CardOperationBalance
    {
        return $this->balance;
    }

    public function descriptionPay(): CardOperationDescriptionPay
    {
        return $this->descriptionPay;
    }

    public function updatePayData(array $payData): void
    {
        $this->payTransactionId = $this->payTransactionId->update($payData['Transaction_Id']);
        $this->payData = $this->payData->update($payData);
    }

    public function setEventCreated(): void
    {
        $this->record(new CardOperationCreatedDomainEvent(
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
            'status' => $this->status->value()
        ];
    }
}