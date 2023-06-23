<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardMovementDescription extends StringValueObject
{
    public static function create(mixed $value): static
    {
        $value = strval($value);
        return new static($value);
    }

    public function update(mixed $value): static
    {
        $value = strval($value);
        return new static($value);
    }
}