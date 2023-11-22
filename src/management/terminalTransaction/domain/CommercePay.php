<?php declare(strict_types=1);

namespace Viabo\management\terminalTransaction\domain;

use Viabo\management\shared\domain\commercePay\CommercePayId;
use Viabo\management\terminalTransaction\domain\events\CommercePayCreatedDomainEvent;
use Viabo\management\terminalTransaction\domain\events\CommercePayUpdatedDomainEvent;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class CommercePay extends AggregateRoot
{

    public function __construct(
        private CommercePayId                  $id ,
        private CommercePayReference           $reference ,
        private CommercePayCommerceId          $commerceId ,
        private CommercePayTerminalId          $terminalId ,
        private CommercePayClientName          $clientName ,
        private CommercePayEmail               $email ,
        private CommercePayPhone               $phone ,
        private CommercePayDescription         $description ,
        private CommercePayAmount              $amount ,
        private CommercePayStatusId            $statusId ,
        private CommercePayLiquidationStatusId $liquidationStatusId ,
        private CommercePayUrlCode             $urlCode ,
        private CommercePayApiAuthCode         $apiAuthCode ,
        private CommercePayApiReferenceNumber  $apiReferenceNumber ,
        private CommercePayCreatedByUser       $createdByUser ,
        private CommercePayRegisterDate        $registerDate ,
        private CommercePayPaymentDate         $paymentDate
    )
    {
    }

    public static function create(
        CommercePayCreatedByUser $createdByUser ,
        CommercePayCommerceId    $commerceId ,
        CommercePayTerminalId    $terminalId ,
        CommercePayClientName    $clientName ,
        CommercePayEmail         $email ,
        CommercePayPhone         $phone ,
        CommercePayDescription   $description ,
        CommercePayAmount        $amount
    ): self
    {
        return new self(
            CommercePayId::random() ,
            CommercePayReference::random() ,
            $commerceId ,
            $terminalId ,
            $clientName ,
            $email ,
            $phone ,
            $description ,
            $amount ,
            new CommercePayStatusId('6') ,
            new CommercePayLiquidationStatusId('12') ,
            CommercePayUrlCode::random() ,
            new CommercePayApiAuthCode('') ,
            new CommercePayApiReferenceNumber('') ,
            $createdByUser ,
            CommercePayRegisterDate::todayDate() ,
            CommercePayPaymentDate::empty()
        );

    }

    private function id(): CommercePayId
    {
        return $this->id;
    }

    public function active(): CommercePayStatusId
    {
        return $this->statusId;
    }

    public function urlCode(): CommercePayUrlCode
    {
        return $this->urlCode;
    }

    public function update(
        CommercePayStatusId           $statusId ,
        CommercePayApiAuthCode        $authCode ,
        CommercePayApiReferenceNumber $referenceNumber
    ): void
    {
        $this->statusId = $statusId;
        $this->apiAuthCode = $authCode;
        $this->apiReferenceNumber = $referenceNumber;

        if ($this->statusId->isApproved()) {
            $this->paymentDate = $this->paymentDate->update();
        }

        $this->record(new CommercePayUpdatedDomainEvent($this->id()->value() , $this->toArray()));
    }

    public function setPayEventCreated(): void
    {
        $this->record(new CommercePayCreatedDomainEvent($this->id->value() , $this->toArray() , $this->email->value()));
    }

    public function updateLiquidationStatusId(string $liquidationStatusId): void
    {
        $this->liquidationStatusId = $this->liquidationStatusId->update($liquidationStatusId);
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'reference' => $this->reference->value() ,
            'commerceId' => $this->commerceId->value() ,
            'terminalId' => $this->terminalId->value() ,
            'fullName' => $this->clientName->value() ,
            'email' => $this->email->value() ,
            'phone' => $this->phone->value() ,
            'description' => $this->description->value() ,
            'amount' => $this->amount->value() ,
            'urlCode' => $this->urlCode->value() ,
            'apiAuthCode' => $this->apiAuthCode->value() ,
            'apiReferenceCode' => $this->apiReferenceNumber->value() ,
            'statusId' => $this->statusId->value() ,
            'liquidationStatusId' => $this->liquidationStatusId->value() ,
            'createdByUser' => $this->createdByUser->value() ,
            'registerDate' => $this->registerDate->value()
        ];
    }
}