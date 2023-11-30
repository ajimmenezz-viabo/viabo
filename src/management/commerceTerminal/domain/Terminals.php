<?php declare(strict_types=1);


namespace Viabo\management\commerceTerminal\domain;


use Viabo\shared\domain\Collection;

final class Terminals extends Collection
{

    public function add(array $values): self
    {
        return new self(array_merge($this->items() , $values));
    }

    public function toArray(): array
    {
        return array_map(function (TerminalView $terminal) {
            return $terminal->toArray();
        } , $this->items());
    }

    public function virtual(): static
    {
        $terminals = array_filter($this->items() , function (TerminalView $terminal) {
            return $terminal->isVirtual();
        });

        return new static($terminals);
    }

    protected function type(): string
    {
        return TerminalView::class;
    }
}