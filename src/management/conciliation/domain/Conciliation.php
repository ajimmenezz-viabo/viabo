<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain;


use Viabo\management\conciliation\domain\events\ConciliationCreatedDomainEvent;
use Viabo\management\shared\domain\card\CardId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Conciliation extends AggregateRoot
{
    private string $cardNumber;

    public function __construct(
        private ConciliationId               $id ,
        private ConciliationReferenceNumber  $referenceNumber ,
        private CardId                       $cardId ,
        private ConciliationAmount           $amount ,
        private ConciliationSpei             $spei ,
        private ConciliationReferencePayCash $referencePayCash ,
        private ConciliationMovementNumber   $movementNumber ,
        private ConciliationEmails           $emails ,
        private ConciliationRegisterDate     $registerDate ,
        private ConciliationActive           $active
    )
    {
        $this->cardNumber = '';
    }

    public static function create(
        CardId                       $cardId ,
        ConciliationAmount           $amount ,
        ConciliationSpei             $spei ,
        ConciliationEmails           $emails ,
        ConciliationReferencePayCash $referencePayCash
    ): static
    {
        return new static(
            ConciliationId::random() ,
            ConciliationReferenceNumber::random() ,
            $cardId ,
            $amount ,
            $spei ,
            $referencePayCash ,
            new ConciliationMovementNumber('') ,
            $emails ,
            ConciliationRegisterDate::todayDate() ,
            new ConciliationActive('1')
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
        $this->record(new ConciliationCreatedDomainEvent($this->id->value() , $this->toArray()));
    }

    public function payCashKey(): string
    {
        return "SETVIABO-{$this->referenceNumber->value()}-{$this->cardNumberLast8Digits()}";
    }

    public function setCardNumber(string $cardNumber): void
    {
        $this->cardNumber = $cardNumber;
    }

    private function cardNumberLast8Digits(): string
    {
        return substr($this->cardNumber , -8);
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