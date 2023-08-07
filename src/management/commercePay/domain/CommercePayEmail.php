<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain;

use Viabo\management\commercePay\domain\exceptions\CommercePayEmailEmpty;
use Viabo\shared\domain\utils\Crypt;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommercePayEmail extends StringValueObject
{
    public static function create(string $value): self
    {
        self::validate($value);
        return new self(Crypt::encrypt($value));
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new CommercePayEmailEmpty();
        }
    }

    public function valueDecrypt(): string
    {
        return Crypt::decrypt($this->value ?? '');
    }
}
