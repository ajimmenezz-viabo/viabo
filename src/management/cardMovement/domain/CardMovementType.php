<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardMovementType extends StringValueObject
{
    private const MOVEMENT_TYPE = ['1' => 'Ingreso' , '2' => 'Gasto'];

    public static function create(mixed $value): static
    {
        $value = intval($value);
        return new static(self::MOVEMENT_TYPE[$value]);
    }

    public function isSpent(): bool
    {
        return $this->value === self::MOVEMENT_TYPE['2'];
    }


}