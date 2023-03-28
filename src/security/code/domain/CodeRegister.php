<?php declare(strict_types=1);


namespace Viabo\security\code\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class CodeRegister extends DateTimeValueObject
{
    public static function create(): self
    {
        return new self(self::todayDate());
    }
}