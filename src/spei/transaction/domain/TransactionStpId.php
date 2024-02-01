<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class TransactionStpId extends StringValueObject
{
    public static function empty(): static
    {
        return new static('');
    }

    public function update(string $value): static
    {
        return new static($value);
    }
}