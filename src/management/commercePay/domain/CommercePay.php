<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain;

use Viabo\management\commercePay\domain\events\CommercePayCreatedDomainEvent;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class CommercePay extends AggregateRoot
{
    public function __construct (
        private CommercePayId            $id,
        private CommercePayReferenceId   $referenceId,
        private CommercePayCommerceId    $commerceId,
        private CommercePayTerminalId    $terminalId,
        private CommercePayFullName      $fullName,
        private CommercePayEmail         $email,
        private CommercePayPhone         $phone,
        private CommercePayDescription   $description,
        private CommercePayAmount        $amount,
        private CommercePayStatusId      $statusId,
        private CommercePayUrlCode       $urlCode,
        private CommercePayCreatedByUser $createdByUser,
        private CommercePayRegisterDate  $registerDate,
    )
    {
    }

    public static function create(
        CommercePayCreatedByUser $createdByUser,
        CommercePayReferenceId   $referenceId,
        CommercePayCommerceId    $commerceId,
        CommercePayTerminalId    $terminalId,
        CommercePayFullName      $fullName,
        CommercePayEmail         $email,
        CommercePayPhone         $phone,
        CommercePayDescription   $description,
        CommercePayAmount        $amount
    ):self
    {
        $commercePay = new self(
            CommercePayId::random(),
            $referenceId,
            $commerceId,
            $terminalId,
            $fullName,
            $email,
            $phone,
            $description,
            $amount,
            new CommercePayStatusId('6'),
            CommercePayUrlCode::random(),
            $createdByUser,
            CommercePayRegisterDate::todayDate()
        );
        $commercePay->record(new CommercePayCreatedDomainEvent(
            $commercePay->id->value(),
            $commercePay->toArray(),
            $commercePay->email->value()));
        return $commercePay;
    }


    public function active(): CommercePayStatusId
    {
        return $this->statusId;
    }
    public function toArray ():array
    {
        return [
            'id' => $this->id->value(),
            'referenceId' => $this->referenceId->value(),
            'commerceId' => $this->commerceId->value(),
            'terminalId' => $this->terminalId->value(),
            'fullName' => $this->fullName->value(),
            'email' => $this->email->value(),
            'phone' => $this->phone->value(),
            'description' => $this->description->value(),
            'amount' => $this->amount->value(),
            'urlCode' => $this->urlCode->value(),
            'statusId' => $this->statusId->value(),
            'createdByUser' => $this->createdByUser->value(),
            'registerDate' => $this->registerDate->value()
        ];
    }
}
