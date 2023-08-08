<?php declare(strict_types=1);


namespace Viabo\management\speiDeposit\domain;


use Viabo\management\speiDeposit\domain\events\DepositedCreatedDomainEvent;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class Deposit extends AggregateRoot
{
    public function __construct(
        private DepositId           $id ,
        private DepositReference    $reference ,
        private DepositAPIKey       $apiKey ,
        private DepositData         $data ,
        private DepositRegisterDate $registerDate
    )
    {
    }

    public static function create(DepositAPIKey $apiKey , DepositData $data): static
    {
        $deposit = new static(
            DepositId::random() ,
            DepositReference::random() ,
            $apiKey ,
            $data ,
            DepositRegisterDate::todayDate()
        );

        $deposit->record(new DepositedCreatedDomainEvent($deposit->id()->value() , $deposit->toArray()));
        return $deposit;
    }

    public function id(): DepositId
    {
        return $this->id;
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value() ,
            'reference' => $this->reference->value() ,
            'apiKey' => $this->apiKey->value() ,
            'data' => $this->data->value() ,
            'registerDate' => $this->registerDate->value()
        ];
    }

    public function toArrayReference(): array
    {
        return ['reference' => $this->reference->value() , 'registerDate' => $this->registerDate->value()];
    }
}