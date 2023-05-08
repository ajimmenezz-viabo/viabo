<?php declare(strict_types=1);


namespace Viabo\management\card\domain;


use Viabo\shared\domain\utils\Crypt;

final class CardView
{
    public function __construct(
        private string $id,
        private string $number,
        private string $cvv,
        private string $expirationDate,
        private string $paymentProcessorId,
        private string $paymentProcessorName,
        private string $statusId,
        private string $statusName,
        private string $commerceId,
        private string $commerceName,
        private string $ownerId,
        private string $ownerName,
        private string $recorderId,
        private string $recorderName,
        private string $registerDate,
        private string $active
    )
    {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'number' => $this->number,
            'CVV' => Crypt::decrypt($this->cvv),
            'expirationDate' => $this->expirationDate,
            'paymentProcessorId' => $this->paymentProcessorId,
            'paymentProcessorName' => $this->paymentProcessorName,
            'statusId' => $this->statusId,
            'statusName' => $this->statusName,
            'commerceId' => $this->commerceId ?? '',
            'commerceName' => $this->commerceName ?? '',
            'ownerId' => $this->ownerId ?? '',
            'ownerName' => $this->ownerName ?? '',
            'recorderId' => $this->recorderId,
            'recorderName' => $this->recorderName,
            'register' => $this->registerDate,
            'active' => $this->active
        ];
    }

}
