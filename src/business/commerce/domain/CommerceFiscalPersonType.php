<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\business\commerce\domain\exceptions\CommerceFiscalPersonTypeEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommerceFiscalPersonType extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CommerceFiscalPersonTypeEmpty();
        }
    }
    public function update(string $value): static
    {
        return new static($value);
    }

}