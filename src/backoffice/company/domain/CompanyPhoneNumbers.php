<?php declare(strict_types=1);


namespace Viabo\backoffice\company\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CompanyPhoneNumbers extends StringValueObject
{
    public static function empty(): static
    {
        return new static('');
    }

    public function update(string $value): static
    {
        return new static($value);
    }

}