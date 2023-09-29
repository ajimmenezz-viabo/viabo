<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain;


use Viabo\management\conciliation\domain\exceptions\ConciliationIdEmpty;
use Viabo\shared\domain\valueObjects\UuidValueObject;

final class ConciliationId extends UuidValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new ConciliationIdEmpty();
        }
    }
}