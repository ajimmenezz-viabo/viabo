<?php declare(strict_types=1);


namespace Viabo\business\commission\domain;


use Viabo\business\commission\domain\events\CommissionCreatedDomainEvent;
use Viabo\business\commission\domain\events\CommissionUpdatedDomainEvent;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Commission extends AggregateRoot
{
    private CommissionCharge $commissionCharge;

    public function __construct(
        private CommissionId                $id ,
        private CommerceId                  $commerceId ,
        private CommissionSpeiInCarnet      $speiInCarnet ,
        private CommissionSpeiInMasterCard  $speiInMasterCard ,
        private CommissionSpeiOutCarnet     $speiOutCarnet ,
        private CommissionSpeiOutMasterCard $speiOutMasterCard ,
        private CommissionPay               $pay ,
        private CommissionUpdateByUser      $updateByUser ,
        private CommissionUpdateDate        $updateDate
    )
    {
        $this->commissionCharge = CommissionCharge::empty();
    }

    public static function create(
        CommerceId                  $commerceId ,
        CommissionSpeiInCarnet      $speiInCarnet ,
        CommissionSpeiInMasterCard  $speiInMasterCard ,
        CommissionSpeiOutCarnet     $speiOutCarnet ,
        CommissionSpeiOutMasterCard $speiOutMasterCard ,
        CommissionPay               $pay ,
        CommissionUpdateByUser      $updateByUser
    ): static
    {
        $commission = new static(
            CommissionId::random() ,
            $commerceId ,
            $speiInCarnet ,
            $speiInMasterCard ,
            $speiOutCarnet ,
            $speiOutMasterCard ,
            $pay ,
            $updateByUser ,
            CommissionUpdateDate::todayDate()
        );

        $commission->record(new CommissionCreatedDomainEvent($commission->id()->value() , $commission->toArray()));

        return $commission;
    }

    public static function empty(CommerceId $commerceId): static
    {
        $commission = new static(
            CommissionId::random() ,
            $commerceId ,
            new CommissionSpeiInCarnet(0) ,
            new CommissionSpeiInMasterCard(0) ,
            new CommissionSpeiOutCarnet(0) ,
            new CommissionSpeiOutMasterCard(0) ,
            new CommissionPay(0) ,
            CommissionUpdateByUser::empty() ,
            CommissionUpdateDate::todayDate()
        );

        $commission->record(new CommissionCreatedDomainEvent($commission->id()->value() , $commission->toArray()));

        return $commission;
    }

    public function id(): CommissionId
    {
        return $this->id;
    }

    public function update(
        CommissionSpeiInCarnet      $speiInCarnet ,
        CommissionSpeiInMasterCard  $speiInMasterCard ,
        CommissionSpeiOutCarnet     $speiOutCarnet ,
        CommissionSpeiOutMasterCard $speiOutMasterCard ,
        CommissionPay               $pay ,
        CommissionUpdateByUser      $updateByUser
    ): void
    {
        $this->speiInCarnet = $speiInCarnet;
        $this->speiInMasterCard = $speiInMasterCard;
        $this->speiOutCarnet = $speiOutCarnet;
        $this->speiOutMasterCard = $speiOutMasterCard;
        $this->pay = $pay;
        $this->updateByUser = $updateByUser;
        $this->updateDate = CommissionUpdateDate::todayDate();

        $this->record(new CommissionUpdatedDomainEvent($this->id()->value() , $this->toArray()));
    }

    public function calculateInputFor(string $paymentProcessor , float $amount): void
    {
        $this->commissionCharge = $this->commissionCharge ?? CommissionCharge::empty();

        if ($this->speiInCarnet->isType($paymentProcessor)) {
            $this->commissionCharge->calculate($this->speiInCarnet->value() , $amount , 'speiInCarnet');
        }

        if ($this->speiInMasterCard->isType($paymentProcessor)) {
            $this->commissionCharge->calculate($this->speiInMasterCard->value() , $amount , 'speiInMasterCard');
        }
    }

    public function charge(): CommissionCharge
    {
        return $this->commissionCharge;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'commerceId' => $this->commerceId->value() ,
            'speiInCarnet' => $this->speiInCarnet->value() ,
            'speiInMasterCard' => $this->speiInMasterCard->value() ,
            'speiOutCarnet' => $this->speiOutCarnet->value() ,
            'speiOutMasterCard' => $this->speiOutMasterCard->value() ,
            'pay' => $this->pay->value() ,
            'updateByUser' => $this->updateByUser->value() ,
            'updateDate' => $this->updateDate->value()
        ];
    }
}