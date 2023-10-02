<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain;


final class CardMovement
{

    public function __construct(
        private CardMovementTransactionId $transactionId ,
        private CardMovementType          $type ,
        private CardMovementAmount        $amount ,
        private CardMovementConcept       $concept ,
        private CardMovementDescription   $description ,
        private CardMovementDate          $date ,
    )
    {
    }

    public static function create(
        mixed $transactionId ,
        mixed $typeId ,
        mixed $charge ,
        mixed $accredit ,
        mixed $description ,
        mixed $date
    ): static
    {
        $typeId = CardMovementType::create($typeId);
        $amount = CardMovementAmount::create($accredit);

        if ($typeId->isExpense()) {
            $amount = $amount->update($charge);
        }

        return new static(
            CardMovementTransactionId::create($transactionId) ,
            $typeId ,
            $amount ,
            new CardMovementConcept('') ,
            CardMovementDescription::create($description) ,
            CardMovementDate::create($date)
        );
    }

    public function updateDescriptionWith(array $operations): void
    {
        foreach ($operations as $operation) {
            if ($this->transactionId->isSame($operation['payTransactionId'])) {
                $this->description = $this->description->update($operation['descriptionPay']);
                $this->concept = $this->concept->update($operation['concept']);
            }

            if ($this->transactionId->isSame($operation['reverseTransactionId'])) {
                $this->description = $this->description->update($operation['descriptionReverse']);
                $this->concept = $this->concept->update($operation['concept']);
            }
        }
    }

    public function isNotConsolidated(mixed $mainCardTransactionsId): bool
    {
        return !in_array($this->transactionId->value(), $mainCardTransactionsId);
    }

    public function typeOperation(array $operations): string
    {
        foreach ($operations as $operation) {
            if ($this->transactionId->isSame($operation['payTransactionId'])) {
                return "VIABO CARD";
            }

            if ($this->transactionId->isSame($operation['reverseTransactionId'])) {
                return "VIABO CARD";
            }
        }

        return $this->type->isExpense() ? "OTROS CARGOS" : "SPEI";
    }
    public function isIncome(): bool
    {
        return $this->type->isIncome();
    }

    public function toArray(): array
    {
        return [
            'transactionId' => $this->transactionId->value() ,
            'description' => $this->description->value() ,
            'concept' => $this->concept->value() ,
            'amount' => $this->amount->value() ,
            'type' => $this->type->value(),
            'date' => $this->date->value()
        ];
    }



}

