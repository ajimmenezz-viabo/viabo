<?php declare(strict_types=1);


namespace Viabo\management\speiDeposit\domain;


use Viabo\management\speiDeposit\domain\exceptions\DepositDataEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class DepositData extends StringValueObject
{
    public static function create(?array $value): static
    {
        self::validate($value);
        return new static(json_encode($value));
    }

    public static function validate(?array $value): void
    {
        if (empty($value)) {
            throw new DepositDataEmpty();
        }
    }
}