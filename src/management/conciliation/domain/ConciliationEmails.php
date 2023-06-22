<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain;


use Viabo\management\conciliation\domain\exceptions\ConciliationEmailsEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class ConciliationEmails extends StringValueObject
{
    public static function create(array $value): self
    {
        self::validate($value);
        $value = implode(',' , $value);
        return new self($value);
    }

    public static function validate(array $value): void
    {
        if (empty($value)) {
            throw new ConciliationEmailsEmpty();
        }
    }
}