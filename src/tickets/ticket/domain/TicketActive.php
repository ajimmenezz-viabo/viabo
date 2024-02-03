<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class TicketActive extends StringValueObject
{
    public static function enable(): static
    {
        return new static('1');
    }
}