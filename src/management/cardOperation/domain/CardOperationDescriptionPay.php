<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardOperationDescriptionPay extends StringValueObject
{
    public static function create(string $cardNumber): static
    {
        return new static("Trasferencia a tarjeta $cardNumber");
    }
}