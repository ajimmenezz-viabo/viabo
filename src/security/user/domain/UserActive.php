<?php declare(strict_types=1);


namespace Viabo\security\user\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class UserActive extends StringValueObject
{
    public static function enable(): static
    {
        return new static('1');
    }
}