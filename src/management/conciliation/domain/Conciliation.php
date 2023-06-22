<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain;


use Viabo\management\conciliation\domain\events\ConciliationCreatedDomainEvent;
use Viabo\management\shared\domain\card\CardId;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Conciliation extends AggregateRoot
{
    public function __construct(
        private ConciliationId              $id ,
        private ConciliationReferenceNumber $referenceNumber ,
        private CardId                      $cardId ,
        private ConciliationAmount          $amount ,
        private ConciliationSpei            $spei ,
        private ConciliationMovementNumber  $movementNumber ,
        private ConciliationEmails          $emails ,
        private ConciliationRegisterDate    $registerDate ,
        private ConciliationActive          $active
    )
    {
    }

    public static function create(
        CardId $cardId , ConciliationAmount $amount , ConciliationSpei $spei , ConciliationEmails $emails
    ): static
    {
        $conciliation = new static(
            ConciliationId::random() ,
            ConciliationReferenceNumber::random() ,
            $cardId ,
            $amount ,
            $spei ,
            new ConciliationMovementNumber('') ,
            $emails ,
            ConciliationRegisterDate::todayDate() ,
            new ConciliationActive('1')
        );

        $conciliation->record(new ConciliationCreatedDomainEvent(
            $conciliation->id->value() , $conciliation->toArray()
        ));

        return $conciliation;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'referenceNumber' => $this->referenceNumber->value() ,
            'cardId' => $this->cardId->value() ,
            'amount' => $this->amount->value() ,
            'spei' => $this->spei->value() ,
            'movementNumber' => $this->movementNumber->value() ,
            'emails' => $this->emails->value() ,
            'registerDate' => $this->registerDate->value() ,
            'active' => $this->active->value() ,
        ];
    }
}