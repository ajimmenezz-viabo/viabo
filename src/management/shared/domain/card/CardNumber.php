<?php declare(strict_types=1);


namespace Viabo\management\shared\domain\card;


use Viabo\management\card\domain\exceptions\CardNumberEmpty;
use Viabo\management\card\domain\exceptions\CardNumberNotDigits;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardNumber extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (self::hasNot16Digits($value)) {
            throw new CardNumberNotDigits();
        }

        if (empty($value)) {
            throw new CardNumberEmpty();
        }
    }

    private static function hasNot16Digits(string $value): bool
    {
        return preg_match('/\d{16}/' , $value) === 0;
    }

    public function last8Digits(): string
    {
        return substr($this->value , -8);
    }
}