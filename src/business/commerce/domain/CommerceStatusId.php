<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommerceStatusId extends StringValueObject
{
    public function update(bool $isLastStep): static
    {
        $value = $isLastStep ? '2' : $this->value;
        return new self($value);
    }
}