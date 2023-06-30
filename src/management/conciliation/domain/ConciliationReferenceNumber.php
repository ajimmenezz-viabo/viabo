<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain;


use Viabo\management\conciliation\domain\exceptions\ConciliationReferenceNumberEmpty;
use Viabo\shared\domain\utils\DatePHP;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class ConciliationReferenceNumber extends StringValueObject
{
    public static function random(): static
    {
        $date = new DatePHP();
        $reference = $date->serializeDate();
        return new static(strval($reference));
    }

    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new ConciliationReferenceNumberEmpty();
        }
    }
}