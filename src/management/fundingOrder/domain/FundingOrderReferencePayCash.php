<?php declare(strict_types=1);


namespace Viabo\management\fundingOrder\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class FundingOrderReferencePayCash extends StringValueObject
{
    public function isEmpty(): bool
    {
        return empty($this->value);
    }

    public function update(string $value): static
    {
        return new static($value);
    }

    public function base64Encode(): string
    {
        return base64_encode($this->value);
    }
}