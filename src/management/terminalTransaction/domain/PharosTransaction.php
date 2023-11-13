<?php declare(strict_types=1);


namespace Viabo\management\terminalTransaction\domain;


final class PharosTransaction
{


    public function __construct(
        private mixed $id ,
        private mixed $transaction_date ,
        private mixed $amount ,
        private mixed $approved ,
        private mixed $terminal_id ,
        private mixed $terminal_type ,
        private mixed $terminal_name ,
        private mixed $message ,
        private mixed $reversed ,
        private mixed $card_number ,
        private mixed $issuer ,
        private mixed $card_brand ,
        private mixed $conciliated ,
    )
    {
    }

    public static function fromValues(array $value): static
    {
        return new static(
            $value["reference"] ,
            $value["transaction_date"] ,
            $value["amount"] ,
            $value["approved"] ,
            $value["terminal_id"] ,
            $value["terminal_type"] ,
            $value["terminal_name"] ,
            $value["message"] ,
            $value["reversed"] ,
            $value["card_number"] ,
            $value["issuer"] ,
            $value["card_brand"] ,
            false
        );
    }

    public function setConciliation(array $conciliations): void
    {
        $this->conciliated = in_array($this->id , $conciliations);
    }

    public function isTerminalPhysical(): bool
    {
        return $this->terminal_type === '2';
    }
    public function belongsToCommerceBy(array $transactionReferences): bool
    {
        return in_array($this->id , $transactionReferences);
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id ,
            'transaction_date' => $this->transaction_date ,
            'amount' => $this->amount ,
            'approved' => $this->approved ,
            'terminal_id' => $this->terminal_id ,
            'terminal_type' => $this->terminal_type ,
            'terminal_name' => $this->terminal_name ,
            'result_message' => $this->message ,
            'reversed' => $this->reversed ,
            'card_number' => $this->card_number ,
            'issuer' => $this->issuer ,
            'card_brand' => $this->card_brand ,
            'conciliated' => $this->conciliated ,
        ];
    }
}