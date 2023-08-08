<?php declare(strict_types=1);


namespace Viabo\management\speiDeposit\domain;


use Viabo\management\speiDeposit\domain\exceptions\DepositAPIKeyEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class DepositAPIKey extends StringValueObject
{
    public static function create(mixed $value): static
    {
        $value = strval($value);
        self::validate($value);
        return new static($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new DepositAPIKeyEmpty();
        }
    }
}