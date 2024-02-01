<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class TransactionTrackingKey extends DateTimeValueObject
{
    public static function create(): static
    {
        $trackingKey = self::todayDate();
        $trackingKey->value = $trackingKey->date->formatDateTime($trackingKey->value , 'YmdHis');
        return $trackingKey;
    }

    public function value(): string
    {
        return $this->value;
    }
}