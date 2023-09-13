<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain;


use Viabo\management\conciliation\domain\events\ConciliationCreatedDomainEvent;
use Viabo\management\shared\domain\card\CardId;
use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Conciliation extends AggregateRoot
{

    public function __construct(
        private ConciliationId               $id ,
        private ConciliationReferenceNumber  $referenceNumber ,
        private CardId                       $cardId ,
        private CardNumber                   $cardNumber ,
        private ConciliationAmount           $amount ,
        private ConciliationSpei             $spei ,
        private ConciliationReferencePayCash $referencePayCash ,
        private ConciliationMovementNumber   $movementNumber ,
        private ConciliationEmails           $emails ,
        private ConciliationRegisterDate     $registerDate ,
        private ConciliationActive           $active ,
        private PayCashData                  $payCashData
    )
    {
    }

    public static function create(
        CardId                       $cardId ,
        CardNumber                   $cardNumber ,
        ConciliationAmount           $amount ,
        ConciliationSpei             $spei ,
        ConciliationEmails           $emails ,
        ConciliationReferencePayCash $referencePayCash ,
        PayCashData                  $payCashData
    ): static
    {
        return new static(
            ConciliationId::random() ,
            ConciliationReferenceNumber::random() ,
            $cardId ,
            $cardNumber ,
            $amount ,
            $spei ,
            $referencePayCash ,
            new ConciliationMovementNumber('') ,
            $emails ,
            ConciliationRegisterDate::todayDate() ,
            new ConciliationActive('1') ,
            $payCashData
        );
    }

    public function amount(): ConciliationAmount
    {
        return $this->amount;
    }

    public function referenceNumber(): ConciliationReferenceNumber
    {
        return $this->referenceNumber;
    }

    public function payCashReference(): ConciliationReferencePayCash
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
        $this->record(new ConciliationCreatedDomainEvent(
            $this->id->value() , $this->payCashInstructionsUrls() , $this->toArray()
        ));
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
    }

    private function payCashInstructionsUrls(): array
    {
        return $this->payCashData->instructionsUrls();
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'referenceNumber' => $this->referenceNumber->value() ,
            'cardId' => $this->cardId->value() ,
            'amount' => $this->amount->value() ,
            'spei' => $this->spei->value() ,
            'referencePayCash' => $this->referencePayCash->value() ,
            'movementNumber' => $this->movementNumber->value() ,
            'emails' => $this->emails->value() ,
            'registerDate' => $this->registerDate->value() ,
            'active' => $this->active->value() ,
        ];
    }

}