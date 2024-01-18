<?php declare(strict_types=1);


namespace Viabo\tickets\supportReason\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;
use Viabo\tickets\supportReason\domain\exceptions\SupportReasonNameEmpty;

final class SupportReasonName extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new SupportReasonNameEmpty();
        }
    }

}