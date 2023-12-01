<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\business\commerce\domain\exceptions\CommerceTradeNameEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommerceTradeName extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CommerceTradeNameEmpty();
        }
    }

    public function update(string $value , string $registerStep): static
    {
        $registerStep = intval($registerStep);
        if ($registerStep > 2) {
            return self::create($value);
        }
        return new static($value);
    }

}