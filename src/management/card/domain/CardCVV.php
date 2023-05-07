<?php declare(strict_types=1);


namespace Viabo\management\card\domain;


use Viabo\management\card\domain\exceptions\CarCVVEmpty;
use Viabo\shared\domain\utils\Crypt;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardCVV extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self(Crypt::encrypt($value));
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CarCVVEmpty();
        }
    }

    public function valueDecrypt(): string
    {
        return Crypt::decrypt($this->value);
    }
}