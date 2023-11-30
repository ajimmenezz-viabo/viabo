<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class CommerceUpdateDate extends DateTimeValueObject
{
    public static function empty(): static
    {
        return new static('0000-00-00 00:00:00');
    }
}