<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class StpAccountBalanceDate extends DateTimeValueObject
{
    public function update(): StpAccountBalanceDate
    {
        return self::todayDate();
    }
}