<?php declare(strict_types=1);


namespace Viabo\spei\externalAccount\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;
use Viabo\spei\externalAccount\domain\exceptions\ExternalAccountInterbankCLABEEmpty;

final class ExternalAccountInterbankCLABE extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new ExternalAccountInterbankCLABEEmpty();
        }
    }
}