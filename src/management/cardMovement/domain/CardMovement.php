<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain;


final class CardMovement
{

    public function __construct(
        private CardMovementTransactionId $transactionId ,
        private CardMovementType          $type ,
        private CardMovementAmount        $amount ,
        private CardMovementDescription   $description ,
        private CardMovementDate          $date ,
    )
    {
    }

    public static function create(
        string $transactionId , int $typeId , mixed $amount , string $description , string $date
    ): static
    {
        return new static(
            new CardMovementTransactionId($transactionId) ,
            CardMovementType::create($typeId) ,
            CardMovementAmount::create($amount) ,
            new CardMovementDescription($description) ,
            new CardMovementDate($date)
        );
    }

    public function updateDescriptionWith(array $operations): void
    {
        foreach ($operations as $operation) {
            if ($this->transactionId->isSame($operation['payTransactionId'])) {
                $this->description = $this->description->update($operation['descriptionPay']);
            }

            if ($this->transactionId->isSame($operation['reverseTransactionId'])) {
                $this->description = $this->description->update($operation['descriptionReverse']);
            }

        }
    }

    public function toArray(): array
    {
        return [
            'date' => $this->date->value() ,
            'description' => $this->description->value() ,
            'amount' => $this->amount->value() ,
            'type' => $this->type->value()
        ];
    }

}