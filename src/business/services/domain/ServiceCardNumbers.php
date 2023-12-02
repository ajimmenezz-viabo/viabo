<?php declare(strict_types=1);


namespace Viabo\business\services\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class ServiceCardNumbers extends StringValueObject
{
    public static function empty(): static
    {
        return new static('0');
    }
}