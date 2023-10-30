<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain;


final class CardMovementView
{

    public function __construct(
        private string $id ,
        private string $setTransactionId ,
        private string $cardId ,
        private string $cardNumber ,
        private string $cardPaymentProcessorId ,
        private string $commerceId ,
        private string $receiptId ,
        private string $type ,
        private string $operationType ,
        private string $amount ,
        private string $concept ,
        private string $description ,
        private string $apiData ,
        private string $date
    )
    {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id ,
            'transactionId' => $this->setTransactionId ,
            'cardId' => $this->cardId ,
            'cardNumber' => $this->cardNumber ,
            'cardPaymentProcessor' => $this->cardPaymentProcessorId ,
            'cardCommerceId' => $this->commerceId ,
            'receiptId' => $this->receiptId ,
            'description' => $this->description ,
            'concept' => $this->concept ,
            'amount' => $this->amount ,
            'type' => $this->type ,
            'operationType' => $this->operationType ,
            'apiData' => $this->apiData ,
            'date' => $this->date ,
            'checked' => $this->receiptId
        ];
    }

}