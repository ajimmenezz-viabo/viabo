<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain;

use Viabo\management\commercePay\domain\events\CommercePayCreatedDomainEvent;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class CommercePay extends AggregateRoot
{
    public function __construct (
        private CommercePayId           $id,
        private CommercePayUserId       $userId,
        private CommercePayCommerceId   $commerceId,
        private CommercePayTerminalId   $terminalId,
        private CommercePayFullName     $fullName,
        private CommercePayEmail        $email,
        private CommercePayPhone        $phone,
        private CommercePayDescription  $description,
        private CommercePayAmount       $amount,
        private CommercePayUrlCode      $urlCode,
        private CommercePayRegisterDate $registerDate,
        private CommercePayActive       $active
    )
    {
    }

    public static function create(
        CommercePayUserId      $userId,
        CommercePayCommerceId  $commerceId,
        CommercePayTerminalId  $terminalId,
        CommercePayFullName    $fullName,
        CommercePayEmail       $email,
        CommercePayPhone       $phone,
        CommercePayDescription $description,
        CommercePayAmount      $amount
    ):self
    {
        $commercePay = new self(
            CommercePayId::random(),
            $userId,
            $commerceId,
            $terminalId,
            $fullName,
            $email,
            $phone,
            $description,
            $amount,
            CommercePayUrlCode::create(),
            CommercePayRegisterDate::todayDate(),
            new CommercePayActive('1')
        );
        $commercePay->record(new CommercePayCreatedDomainEvent($commercePay->id->value(),$commercePay->toArray()));
        return $commercePay;
    }


    public function active(): CommercePayActive
    {
        return $this->active;
    }
    public function toArray ():array
    {
        return [
          'id'  => $this->id->value(),
          'userId'  => $this->userId->value(),
          'commerceId'  => $this->commerceId->value(),
          'terminalId'  => $this->terminalId->value(),
          'fullName'  => $this->fullName->value(),
          'email'  => $this->email->valueDecrypt(),
          'phone'  => $this->phone->value(),
          'description'  => $this->description->value(),
          'amount'  => $this->amount->value(),
          'urlCode'  => $this->urlCode->value(),
          'registerDate'  => $this->registerDate->value(),
          'active'  => $this->active->value(),
        ];
    }
}
