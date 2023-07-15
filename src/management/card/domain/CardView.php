<?php declare(strict_types=1);


namespace Viabo\management\card\domain;


use Viabo\shared\domain\utils\Crypt;

final class CardView
{
    public function __construct(
        private string $id ,
        private string $main ,
        private string $number ,
        private string $cvv ,
        private string $expirationDate ,
        private string $paymentProcessorId ,
        private string $paymentProcessorName ,
        private string $statusId ,
        private string $statusName ,
        private string $commerceId ,
        private string $commerceName ,
        private string $ownerId ,
        private string $ownerName ,
        private string $ownerEmail ,
        private string $ownerPhone ,
        private string $recorderId ,
        private string $recorderName ,
        private string $registerDate ,
        private string $active
    )
    {
    }

    private function cvv(): string
    {
        return empty($this->cvv) ? strval(random_int(0 , 999)) : Crypt::decrypt($this->cvv);
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id ,
            'main' => $this->main ,
            'number' => $this->number ,
            'CVV' => $this->cvv() ,
            'expirationDate' => $this->expirationDate ,
            'paymentProcessorId' => $this->paymentProcessorId ,
            'paymentProcessorName' => $this->paymentProcessorName ,
            'statusId' => $this->statusId ,
            'statusName' => $this->statusName ,
            'commerceId' => $this->commerceId ?? '' ,
            'commerceName' => $this->commerceName ?? '' ,
            'ownerId' => $this->ownerId ?? '' ,
            'ownerName' => $this->ownerName ?? '' ,
            'ownerEmail' => $this->ownerEmail ?? '' ,
            'ownerPhone' => $this->ownerPhone ?? '' ,
            'recorderId' => $this->recorderId ,
            'recorderName' => $this->recorderName ,
            'register' => $this->registerDate ,
            'active' => $this->active
        ];
    }

}
