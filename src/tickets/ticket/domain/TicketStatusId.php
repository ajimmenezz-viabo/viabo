<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class TicketStatusId extends StringValueObject
{
    public static function new(): static
    {
        return new static('1');
    }
}