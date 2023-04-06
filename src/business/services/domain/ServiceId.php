<?php declare(strict_types=1);


namespace Viabo\business\services\domain;


use Viabo\shared\domain\valueObjects\UuidValueObject;

final class ServiceId extends UuidValueObject
{
    public static function create(): self
    {
        return new self(self::random()->value());
    }
}