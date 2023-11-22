<?php declare(strict_types=1);


namespace Viabo\management\terminalTransaction\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommercePayLiquidationStatusId extends StringValueObject
{
    public function update(string $value): static
    {
        return new static($value);
    }
}