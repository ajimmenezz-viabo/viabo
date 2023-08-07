<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain;

use Viabo\shared\domain\valueObjects\UuidValueObject;

final class CommercePayUrlCode extends UuidValueObject
{
    public static function create(): self
    {
        $uuid = self::random();
        $value = substr($uuid->value(),0,8);
        return new self($value);
    }
}
