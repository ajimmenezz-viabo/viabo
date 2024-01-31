<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommerceStpAccountId extends StringValueObject
{
    public static function empty(): static
    {
        return new static('');
    }
}