<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommercePointSaleTerminal extends StringValueObject
{
    public static function create(string $value): self
    {
        return new self(!empty($value) ? $value : '0');
    }

    public function update(string $value): static
    {
         $value = empty($value)? '0': $value;
        return new static($value);
    }

}