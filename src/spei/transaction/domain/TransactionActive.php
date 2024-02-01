<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class TransactionActive extends StringValueObject
{
    public static function enable(): static
    {
        return new static('1');
    }
}