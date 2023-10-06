<?php declare(strict_types=1);


namespace Viabo\management\fundingOrder\domain;


use Viabo\management\fundingOrder\domain\events\FundingOrderCanceledDomainEvent;
use Viabo\management\fundingOrder\domain\events\FundingOrderCreatedDomainEvent;
use Viabo\management\fundingOrder\domain\events\FundingOrderConciliatedDomainEvent;
use Viabo\management\fundingOrder\domain\events\FundingOrderStatusUpdatedDomainError;
use Viabo\management\shared\domain\card\CardId;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class FundingOrder extends AggregateRoot
{

    public function __construct(
        private FundingOrderId                      $id ,
        private FundingOrderReferenceNumber         $referenceNumber ,
        private FundingOrderStatusId                $status ,
        private CardId                              $cardId ,
        private CardNumber                          $cardNumber ,
        private FundingOrderAmount                  $amount ,
        private FundingOrderSpei                    $spei ,
        private FundingOrderReferencePayCash        $referencePayCash ,
        private FundingOrderPayCashInstructionsUrls $instructionsUrls ,
        private FundingOrderEmails                  $emails ,
        private FundingOrderConciliationNumber      $conciliationNumber ,
        private FundingOrderConciliationUser        $conciliationUserId ,
        private FundingOrderConciliationDate        $conciliationDate ,
        private FundingOrderCanceledByUser          $canceledByUser ,
        private FundingOrderCancellationDate        $cancellationDate ,
        private FundingOrderRegisterDate            $registerDate ,
        private FundingOrderActive                  $active ,
        private PayCashData                         $payCashData
    )
    {
    }

    public static function create(
        CardId                       $cardId ,
        CardNumber                   $cardNumber ,
        FundingOrderAmount           $amount ,
        FundingOrderSpei             $spei ,
        FundingOrderEmails           $emails ,
        FundingOrderReferencePayCash $referencePayCash ,
        PayCashData                  $payCashData
    ): static
    {
        return new static(
            FundingOrderId::random() ,
            FundingOrderReferenceNumber::random() ,
            new FundingOrderStatusId('6') ,
            $cardId ,
            $cardNumber ,
            $amount ,
            $spei ,
            $referencePayCash ,
            FundingOrderPayCashInstructionsUrls::empty() ,
            $emails ,
            new FundingOrderConciliationNumber('') ,
            FundingOrderConciliationUser::empty() ,
            FundingOrderConciliationDate::empty() ,
            FundingOrderCanceledByUser::empty() ,
            FundingOrderCancellationDate::empty() ,
            FundingOrderRegisterDate::todayDate() ,
            new FundingOrderActive('1') ,
            $payCashData
        );
    }

    public function amount(): FundingOrderAmount
    {
        return $this->amount;
    }

    public function referenceNumber(): FundingOrderReferenceNumber
    {
        return $this->referenceNumber;
    }

    public function payCashReference(): FundingOrderReferencePayCash
    {
        return $this->referencePayCash;
    }

    public function isNotTypeCharge(): bool
    {
        return $this->referencePayCash->isEmpty() && $this->spei->isEmpty();
    }

    public function isDefineTypeChargePayCash(): bool
    {
        return !$this->referencePayCash->isEmpty();
    }

    public function updateReferencePayCash(string $reference): void
    {
        $this->referencePayCash = $this->referencePayCash->update($reference);
    }

    public function setEventCreated(): void
    {
        $this->record(new FundingOrderCreatedDomainEvent($this->id->value() , $this->toArray()));
    }

    public function payCashKey(): string
    {
        return "SETVIABO-{$this->referenceNumber->value()}-{$this->cardNumber->last8Digits()}";
    }

    public function payCashData(): array
    {
        return $this->payCashData->toArray();
    }

    public function setPayCashInstructionsUrl(array $referenceData): void
    {
        if (empty($referenceData)) {
            return;
        }
        $this->payCashData->setInstructionsUrls(
            strval($referenceData['SenderId']) ,
            $this->referencePayCash->base64Encode()
        );
        $this->instructionsUrls = $this->instructionsUrls->update($this->payCashData->instructionsUrls());
    }

    public function setConciliation(
        FundingOrderConciliationUser   $conciliationUserId ,
        FundingOrderConciliationNumber $numberConciliation
    ): void
    {
        $this->status = $this->status->conciliation();
        $this->conciliationNumber = $numberConciliation;
        $this->conciliationUserId = $conciliationUserId;
        $this->conciliationDate = FundingOrderConciliationDate::todayDate();
        $this->record(new FundingOrderConciliatedDomainEvent($this->id->value() , $this->toArray()));
    }

    public function cancel(FundingOrderCanceledByUser $user , PayCashData $payCashData): void
    {
        $this->payCashData = $payCashData;
        $this->status = $this->status->cancel();
        $this->canceledByUser = $user;
        $this->cancellationDate = FundingOrderCancellationDate::todayDate();
        $this->record(new FundingOrderCanceledDomainEvent($this->id->value() , $this->toArray()));
    }

    public function hasNoPendingStatus(): bool
    {
        return !$this->status->hasPendingStatus();
    }

    public function updateStatus(FundingOrderStatusId $statusId): void
    {
        $this->status = $statusId;
        $this->record(new FundingOrderStatusUpdatedDomainError($this->id->value() , $this->toArray()));
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'referenceNumber' => $this->referenceNumber->value() ,
            'status' => $this->status->value() ,
            'cardId' => $this->cardId->value() ,
            'amount' => $this->amount->value() ,
            'amountFormat' => $this->amount->format() ,
            'spei' => $this->spei->value() ,
            'referencePayCash' => $this->referencePayCash->value() ,
            'instructionsUrls' => $this->instructionsUrls->toArray() ,
            'emails' => $this->emails->value() ,
            'conciliationNumber' => $this->conciliationNumber->value() ,
            'conciliationUserId' => $this->conciliationUserId->value() ,
            'conciliationDate' => $this->conciliationDate->value() ,
            'canceledByUser' => $this->canceledByUser->value() ,
            'cancellationDate' => $this->cancellationDate->value() ,
            'registerDate' => $this->registerDate->value() ,
            'active' => $this->active->value() ,
        ];
    }

}