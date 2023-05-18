<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardOperationDescriptionReverse extends StringValueObject
{
    public function update(string $cardNumber): static
    {
        return new static("Trasferencia desde la tarjeta $cardNumber");
    }
}