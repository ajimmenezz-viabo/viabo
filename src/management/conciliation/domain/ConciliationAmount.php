<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain;


use Viabo\management\conciliation\domain\exceptions\ConciliationAmountEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class ConciliationAmount extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new ConciliationAmountEmpty();
        }
    }
}