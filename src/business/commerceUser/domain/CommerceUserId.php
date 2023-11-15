<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\domain;


use Viabo\business\commerceUser\domain\exceptions\CommerceUserIdEmpty;
use Viabo\shared\domain\valueObjects\UuidValueObject;

final class CommerceUserId extends UuidValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CommerceUserIdEmpty();
        }
    }
}