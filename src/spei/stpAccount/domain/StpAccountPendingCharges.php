<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\domain;


use Viabo\shared\domain\valueObjects\DecimalValueObject;

final class StpAccountPendingCharges extends DecimalValueObject
{
    public function update(float $value): static
    {
        return new static($value);
    }
}