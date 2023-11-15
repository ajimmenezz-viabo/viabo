<?php declare(strict_types=1);


namespace Viabo\business\commission\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class CommissionUpdateDate extends DateTimeValueObject
{
    public static function empty(): CommissionUpdateDate
    {
        $date = self::todayDate();
        $date->value = '0000-00-00 00:00:00';
        return $date;
    }
}