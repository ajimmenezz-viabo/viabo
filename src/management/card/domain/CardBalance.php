<?php declare(strict_types=1);


namespace Viabo\management\card\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardBalance extends StringValueObject
{
    public function value(): string
    {
        return empty($this->value) ? '0.00' : $this->value;
    }

    public function update(string $value): static
    {
        return new static($value);
    }

}