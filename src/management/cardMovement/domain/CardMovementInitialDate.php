<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain;


use Viabo\management\cardMovement\domain\exceptions\CardMovementInitialDateEmpty;
use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class CardMovementInitialDate extends DateTimeValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self("$value 00:00:00");
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CardMovementInitialDateEmpty();
        }
    }
}