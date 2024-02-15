<?php declare(strict_types=1);


namespace Viabo\backoffice\company\domain;


use Viabo\shared\domain\valueObjects\DecimalValueObject;

final class CompanyBalance extends DecimalValueObject
{
    public static function empty(): static
    {
        return new static(0);
    }
}