<?php declare(strict_types=1);


namespace Viabo\security\user\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class UserRegister extends DateTimeValueObject
{
    public static function create(): self
    {
        return new self(parent::todayDate());
    }

}