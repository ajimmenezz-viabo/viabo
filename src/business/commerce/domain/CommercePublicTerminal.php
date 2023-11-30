<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommercePublicTerminal extends StringValueObject
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