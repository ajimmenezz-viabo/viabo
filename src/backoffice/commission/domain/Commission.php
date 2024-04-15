<?php declare(strict_types=1);


namespace Viabo\backoffice\commission\domain;


use Viabo\backoffice\commission\domain\events\CommissionCreatedDomainEvent;
use Viabo\backoffice\commission\domain\events\CommissionUpdatedDomainEvent;
use Viabo\backoffice\shared\domain\company\CompanyId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Commission extends AggregateRoot
{
    private CommissionCharge $commissionCharge;

    public function __construct(
        private CommissionId                $id ,
        private CompanyId                   $commerceId ,
        private CommissionSpeiInCarnet      $speiInCarnet ,
        private CommissionSpeiInMasterCard  $speiInMasterCard ,
        private CommissionSpeiOutCarnet     $speiOutCarnet ,
        private CommissionSpeiOutMasterCard $speiOutMasterCard ,
        private CommissionPay               $pay ,
        private CommissionSharedTerminal    $sharedTerminal ,
        private CommissionUpdateByUser      $updateByUser ,
        private CommissionUpdateDate        $updateDate
    )
    {
        $this->commissionCharge = CommissionCharge::empty();
    }

    public static function create(
        string $commerceId ,
        float  $speiInCarnet ,
        float  $speiInMasterCard ,
        float  $speiOutCarnet ,
        float  $speiOutMasterCard ,
        float  $pay ,
        float  $sharedTerminal ,
        string $updateByUser
    ): static
    {
        $commission = new static(
            CommissionId::random() ,
            CompanyId::create($commerceId) ,
            new CommissionSpeiInCarnet($speiInCarnet) ,
            new CommissionSpeiInMasterCard($speiInMasterCard) ,
            new CommissionSpeiOutCarnet($speiOutCarnet) ,
            new CommissionSpeiOutMasterCard($speiOutMasterCard) ,
            new CommissionPay($pay) ,
            new CommissionSharedTerminal($sharedTerminal) ,
            new CommissionUpdateByUser($updateByUser) ,
            CommissionUpdateDate::todayDate()
        );

        $commission->record(new CommissionCreatedDomainEvent($commission->id()->value() , $commission->toArray()));

        return $commission;
    }

    public static function empty(CompanyId $commerceId): static
    {
        $commission = new static(
            CommissionId::random() ,
            $commerceId ,
            CommissionSpeiInCarnet::empty() ,
            CommissionSpeiInMasterCard::empty() ,
            CommissionSpeiOutCarnet::empty() ,
            CommissionSpeiOutMasterCard::empty() ,
            CommissionPay::empty() ,
            CommissionSharedTerminal::empty() ,
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
        float  $speiInCarnet ,
        float  $speiInMasterCard ,
        float  $speiOutCarnet ,
        float  $speiOutMasterCard ,
        float  $pay ,
        float  $sharedTerminal ,
        string $updateByUser
    ): void
    {
        $this->speiInCarnet = $this->speiInCarnet->update($speiInCarnet);
        $this->speiInMasterCard = $this->speiInMasterCard->update($speiInMasterCard);
        $this->speiOutCarnet = $this->speiOutCarnet->update($speiOutCarnet);
        $this->speiOutMasterCard = $this->speiOutMasterCard->update($speiOutMasterCard);
        $this->pay = $this->pay->update($pay);
        $this->sharedTerminal = $this->sharedTerminal->update($sharedTerminal);
        $this->updateByUser = $this->updateByUser->update($updateByUser);
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
            'sharedTerminal' => $this->sharedTerminal->value() ,
            'updateByUser' => $this->updateByUser->value() ,
            'updateDate' => $this->updateDate->value()
        ];
    }
}