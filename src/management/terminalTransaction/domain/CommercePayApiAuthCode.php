<?php declare(strict_types=1);

namespace Viabo\management\terminalTransaction\domain;

use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommercePayApiAuthCode extends StringValueObject
{

    public static function empty(): static
    {
        return new static('');
    }
}
