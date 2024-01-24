<?php declare(strict_types=1);


namespace Viabo\spei\externalAccount\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class ExternalAccountActive extends StringValueObject
{
    public static function enable(): static
    {
        return new static('1');
    }
}