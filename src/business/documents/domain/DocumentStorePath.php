<?php declare(strict_types=1);


namespace Viabo\business\documents\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class DocumentStorePath extends StringValueObject
{
    public function update(string $value): self
    {
        return new self("/store$value");
    }
}