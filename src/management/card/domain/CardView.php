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
        private ?string $assignmentDate ,
        private string $registerDate ,
        private string $active
    )
    {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id ,
            'main' => $this->main ,
            'number' => $this->number ,
            'CVV' => Crypt::decrypt($this->cvv) ,
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
            'assignmentDate' => $this->assigmentDate() ,
            'register' => $this->registerDate ,
            'active' => $this->active
        ];
    }

    private function assigmentDate(): string
    {
        if($this->assignmentDate === '0000-00-00 00:00:00'){
            return '';
        }
        return $this->assignmentDate ?? '';
    }

}
