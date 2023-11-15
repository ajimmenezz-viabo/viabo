<?php declare(strict_types=1);


namespace Viabo\business\commission\domain;


use Viabo\shared\domain\valueObjects\DecimalValueObject;

final class CommissionSpeiInCarnet extends DecimalValueObject
{
    public function isType(string $paymentProcessor): bool
    {
        return 'carnet' === strtolower($paymentProcessor);
    }
}