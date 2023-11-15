<?php declare(strict_types=1);


namespace Viabo\business\commission\domain;


use Viabo\shared\domain\valueObjects\UuidValueObject;

final class CommissionUpdateByUser extends UuidValueObject
{
    public static function empty(): CommissionUpdateByUser
    {
        $user = self::random();
        $user->value = '';
        return $user;
    }
}