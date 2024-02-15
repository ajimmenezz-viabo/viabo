<?php declare(strict_types=1);


namespace Viabo\backoffice\company\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CompanyActive extends StringValueObject
{
    public static function enable(): static
    {
        return new static('1');
    }
}