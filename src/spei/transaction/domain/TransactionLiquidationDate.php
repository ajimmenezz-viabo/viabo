<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class TransactionLiquidationDate extends DateTimeValueObject
{
    public static function empty(): static
    {
        $date = new static('');
        $date->value = '0000-00-00 00:00:00';
        return $date;
    }

    public static function createByTimestamp(mixed $timeStamp): static
    {

        $date = new static('');
        $date->convertTimestampToDate($timeStamp);
        return $date;
    }

    public function update(mixed $timeStamp): static
    {
        $date = new static('');
        $date->convertTimestampToDate($timeStamp);
        return $date;
    }
}