<?php declare(strict_types=1);


namespace Viabo\shared\domain\criteria;


use Viabo\shared\domain\Assert;

final class Filters
{
    public function __construct(private array $items)
    {
        Assert::arrayOf($this->type() , $items);
    }

    public static function fromValues(?array $values): self
    {
        if (empty($values)) {
            return new self([]);
        }

        return new self(array_map(self::filterBuilder() , $values));
    }

    public static function fromValuesEmpty(?array $values): self
    {
        if (empty($values)) {
            return new self([]);
        }

        return new self(array_map(self::filterBuilderEmpty() , $values));
    }

    private static function filterBuilder(): callable
    {
        return function (array $values) {
            return Filter::fromValues($values);
        };
    }

    private static function filterBuilderEmpty(): callable
    {
        return function (array $values) {
            return Filter::fromValuesEmpty($values);
        };
    }

    public static function empty(): self
    {
        return new self([]);
    }

    public function count(): int
    {
        return count($this->items);
    }

    public function get(): array
    {
        return $this->items;
    }

    protected function type(): string
    {
        return Filter::class;
    }

}