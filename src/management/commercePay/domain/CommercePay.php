<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain;

use Viabo\management\commercePay\domain\events\CommercePayCreatedDomainEvent;
use Viabo\management\commercePay\domain\events\CommercePayUpdatedDomainEvent;
use Viabo\management\shared\domain\commercePay\CommercePayId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class CommercePay extends AggregateRoot
{


    public function __construct(
        private CommercePayId            $id ,
        private CommercePayReference     $reference ,
        private CommercePayCommerceId    $commerceId ,
        private CommercePayTerminalId    $terminalId ,
        private CommercePayClientName    $clientName ,
        private CommercePayEmail         $email ,
        private CommercePayPhone         $phone ,
        private CommercePayDescription   $description ,
        private CommercePayAmount        $amount ,
        private CommercePayStatusId      $statusId ,
        private CommercePayUrlCode       $urlCode ,
        private CommercePayCreatedByUser $createdByUser ,
        private CommercePayRegisterDate  $registerDate ,
        private CommercePayPaymentDate   $paymentDate
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
        $commercePay = new self(
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
            CommercePayUrlCode::random() ,
            $createdByUser ,
            CommercePayRegisterDate::todayDate() ,
            CommercePayPaymentDate::empty()
        );
        $commercePay->record(new CommercePayCreatedDomainEvent(
                $commercePay->id->value() ,
                $commercePay->toArray() ,
                $commercePay->email->value())
        );
        return $commercePay;
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

    public function update(CommercePayStatusId $statusId): void
    {
        $this->statusId = $statusId;
        if ($this->statusId->isApproved()) {
            $this->paymentDate = $this->paymentDate->update();
            $this->urlCode = $this->urlCode->update();
        }

        $this->record(new CommercePayUpdatedDomainEvent($this->id()->value(), $this->toArray()));
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
            'statusId' => $this->statusId->value() ,
            'createdByUser' => $this->createdByUser->value() ,
            'registerDate' => $this->registerDate->value()
        ];
    }
}
