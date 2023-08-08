<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\domain;

use Viabo\management\commerceTransaction\domain\events\CommercePaytransactionCreatedDomainEvent;
use Viabo\shared\domain\aggregate\AggregateRoot;

final class CommercePayTransaction extends AggregateRoot
{
    public function __construct(
        public CommercePayTransactionId $id,
        public CommercePayTransactionOperationId $operationId,
        public CommercePayTransactionStatusId $statusId,
        public CommercePayTransactionDate $date
    )
    {
    }
    public static function create(
        CommercePayTransactionOperationId $operationId,
        CommercePayTransactionStatusId $statusId
    ):self
    {
        $commercePay = new self(
            CommercePayTransactionId::random(),
            $operationId,
            $statusId,
            CommercePayTransactionDate::todayDate()
        );

        $commercePay->record(new CommercePaytransactionCreatedDomainEvent(
            $commercePay->id->value(),
            $commercePay->toArray()
        ));

        return $commercePay;
    }

    public function toArray():array
    {
        return [
            'id' => $this->id->value(),
            'operationId' => $this->operationId->value(),
            'statusId' => $this->statusId->value(),
            'date' => $this->date->value(),
        ];
    }

}
