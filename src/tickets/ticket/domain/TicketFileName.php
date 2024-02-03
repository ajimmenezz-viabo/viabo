<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class TicketFileName extends StringValueObject
{

    public static function create(string $name): static
    {
        $name = pathinfo($name);
        return new static($name['filename']);
    }
}