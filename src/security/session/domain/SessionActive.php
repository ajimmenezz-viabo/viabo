<?php declare(strict_types=1);


namespace Viabo\security\session\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class SessionActive extends StringValueObject
{
    public function update(string $value): static
    {
        return new static($value);
    }
}