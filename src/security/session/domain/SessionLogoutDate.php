<?php declare(strict_types=1);


namespace Viabo\security\session\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class SessionLogoutDate extends DateTimeValueObject
{
    public function logout(): self
    {
        return self::todayDate();
    }
}