<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardMovementConcept extends StringValueObject
{
    public function update(string $value): static
    {
        return new static($value);
    }
}