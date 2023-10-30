<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardMovementReceiptId extends StringValueObject
{
    public static function empty(): static
    {
        return new static('');
    }

    public function update(string $value): static
    {
        return new static($value);
    }

    public function isChecked(): bool
    {
        return !empty($this->value);
    }
}