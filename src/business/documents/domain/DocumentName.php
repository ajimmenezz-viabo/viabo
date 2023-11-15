<?php declare(strict_types=1);


namespace Viabo\business\documents\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class DocumentName extends StringValueObject
{
    public static function create(string $value): self
    {
        return new self(strtoupper($value));
    }

    public function update(string $value): self
    {
        return new self($value);
    }
}