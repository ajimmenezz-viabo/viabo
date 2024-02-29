<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class TransactionStpId extends StringValueObject
{
    public static function empty(): static
    {
        return new static('');
    }

    public static function create(mixed $value): static
    {
        $value = is_string($value) ? $value : strval($value);
        return new static($value);
    }

    public function update(mixed $value): static
    {
        $value = is_string($value) ? $value : strval($value);
        return new static($value);
    }

    public function isSame(mixed $value): bool
    {
        $value = is_string($value) ? $value : strval($value);
        return $this->value === $value;
    }
}