<?php declare(strict_types=1);


namespace Viabo\stp\users\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class UserCardCloudEmail extends StringValueObject
{
    public static function create(string $value): self
    {
        return new self($value);
    }
}