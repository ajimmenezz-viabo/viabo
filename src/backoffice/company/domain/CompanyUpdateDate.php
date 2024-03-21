<?php declare(strict_types=1);


namespace Viabo\backoffice\company\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class CompanyUpdateDate extends DateTimeValueObject
{
    public static function empty(): static
    {
        $date = self::todayDate();
        $date->value = '0000-00-00 00:00:00';
        return $date;
    }

    public function update(string $date): static
    {
        return new static($date);
    }
}