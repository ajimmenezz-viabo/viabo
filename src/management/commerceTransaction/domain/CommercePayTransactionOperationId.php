<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\domain;

use Viabo\management\commerceTransaction\domain\exceptions\CommercePayTransactionOperationIdEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommercePayTransactionOperationId extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CommercePayTransactionOperationIdEmpty();
        }
    }
}