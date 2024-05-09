<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\utils\DatePHP;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class TransactionReference extends StringValueObject
{
    public static function random(): static
    {
        $date = new DatePHP();
        $date = intval($date->serializeDate());
        return new static(strval($date));
    }

    public static function fromIncrement(string $value): self
    {
        $value = intval($value) + 1;
        return new self(strval($value));
    }

    public function increment(): static
    {
        $value = intval($this->value) + 1;
        return new static(strval($value));
    }

}