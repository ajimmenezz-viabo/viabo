<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class TicketFileStoragePath extends StringValueObject
{

    public static function create(string $ticketId , string $file): static
    {
        return new static("/tickets/$ticketId/$file");
    }

    public function directoryPath(): string
    {
        return dirname($this->value);
    }
}