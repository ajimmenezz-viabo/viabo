<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class ConciliationPayCashInstructionsUrls extends StringValueObject
{
    public static function empty(): static
    {
        return new static(json_encode([]));
    }

    public function update(array $value): static
    {
        $value = json_encode($value);
        return new static($value);
    }

    public function toArray(): array
    {
        return json_decode($this->value , true);
    }
}