<?php declare(strict_types=1);


namespace Viabo\management\commercePay\domain;


final class CommercePayView
{
    public function __construct(
        private string $id ,
        private string $reference ,
        private string $commerceId ,
        private string $terminalId ,
        private string $clientName ,
        private string $email ,
        private string $phone ,
        private string $description ,
        private string $amount ,
        private string $statusId ,
        private string $statusName ,
        private string $urlCode ,
        private string $createdByUser ,
        private string $registerDate
    )
    {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id ,
            'reference' => $this->reference ,
            'commerceId' => $this->commerceId ,
            'terminalId' => $this->terminalId ,
            'clientName' => $this->clientName ,
            'email' => $this->email ,
            'phone' => $this->phone ,
            'description' => $this->description ,
            'amount' => $this->amount ,
            'statusId' => $this->statusId ,
            'statusName' => $this->statusName ,
            'urlCode' => $this->urlCode ,
            'createdByUser' => $this->createdByUser ,
            'registerDate' => $this->registerDate
        ];
    }

    public function toLinkDataArray(): array
    {
        return [
            'id' => $this->id ,
            'commerceId' => $this->commerceId ,
            'terminalId' => $this->reference ,
            'reference' => $this->reference ,
            'clientName' => $this->clientName ,
            'email' => $this->email ,
            'phone' => $this->phone ,
            'description' => $this->description ,
            'amount' => $this->amount ,
            'statusId' => $this->statusId ,
            'statusName' => $this->statusName
        ];
    }
}