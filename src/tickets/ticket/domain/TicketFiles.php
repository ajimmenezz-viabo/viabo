<?php declare(strict_types=1);


namespace Viabo\tickets\ticket\domain;


use Viabo\shared\domain\Collection;

final class TicketFiles extends Collection
{
    public static function fromValues(array $values): static
    {
        return new static(array_map(self::fileBuilder() , $values));
    }

    private static function fileBuilder(): callable
    {
        return fn(array $values): TicketFile => TicketFile::fromValue($values);
    }

    public static function empty(): static
    {
        return new static([]);
    }

    public function value()
    {
        return array_map(function (TicketFile $document) {
            return $document->toArray();
        } , $this->items());
    }

    public function elements(): array
    {
        return $this->items();
    }

    protected function type(): string
    {
        return TicketFile::class;
    }
}