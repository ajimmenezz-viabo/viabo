<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain;

use Viabo\management\commercePay\domain\exceptions\CommercePayTerminalIdEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommercePayTerminalId extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CommercePayTerminalIdEmpty();
        }
    }
}
