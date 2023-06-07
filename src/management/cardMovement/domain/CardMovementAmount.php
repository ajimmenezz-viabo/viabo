<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardMovementAmount extends StringValueObject
{
    public static function create(mixed $value): static
    {
        return new static(strval($value));
    }

    public function value(): string
    {
        return empty($this->value) ? '0' : $this->value;
    }

}