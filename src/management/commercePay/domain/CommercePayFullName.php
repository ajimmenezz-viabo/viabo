<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain;

use Viabo\management\commercePay\domain\exceptions\CommercePayFullNameEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommercePayFullName extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CommercePayFullNameEmpty();
        }
    }
}
