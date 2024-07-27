<?php declare(strict_types=1);


namespace Viabo\stp\transaction\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class TransactionTrackingKey extends DateTimeValueObject
{
    public static function create(string $acronym): static
    {
        $trackingKey = self::todayDate();
        $trackingKey->value = $acronym . $trackingKey->date->formatDateTime($trackingKey->value, 'YmdHis');;
        return $trackingKey;
    }

    public static function empty(): static
    {
        return new static('');
    }

    public function value(): string
    {
        return $this->value;
    }

    public function increment(int $second): void
    {
        $seconds = intval(substr($this->value, -2)) + $second;
        $this->value = substr_replace($this->value, strval($seconds), strlen($this->value) - 2, 2);
    }
}