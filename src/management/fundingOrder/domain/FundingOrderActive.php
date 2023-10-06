<?php declare(strict_types=1);


namespace Viabo\management\fundingOrder\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class FundingOrderActive extends StringValueObject
{
    public function disable(): static
    {
        return new static('0');
    }

    public function value(): string
    {
        return empty($this->value) ? '0' : $this->value;
    }
}