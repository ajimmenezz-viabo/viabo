<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class TicketFolio extends StringValueObject
{
    public static function empty(): static
    {
        return new static('');
    }
}