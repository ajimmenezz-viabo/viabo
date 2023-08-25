<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\domain;


final class CommercePayTransactionGlobalAmount
{
    public function __construct(private float $amount = 0)
    {
    }

    public function sum(float $value):void
    {
        $this->amount += $value;
    }

    public function total(): string
    {
        return empty($this->amount)? '0.00' : number_format($this->amount,2);
    }
}
