<?php declare(strict_types=1);


namespace Viabo\backoffice\commission\domain\spei;


use Viabo\shared\domain\valueObjects\DecimalValueObject;

final class CommissionSpeiOut extends DecimalValueObject
{
    public static function create(float $value): static
    {
        return new static($value);
    }

}