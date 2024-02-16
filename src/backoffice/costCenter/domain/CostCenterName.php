<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\domain;


use Viabo\backoffice\costCenter\domain\exceptions\CostCenterNameEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CostCenterName extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CostCenterNameEmpty();
        }
    }
}