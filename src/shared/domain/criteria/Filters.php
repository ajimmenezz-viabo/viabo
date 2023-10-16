<?php declare(strict_types=1);


namespace Viabo\shared\domain\criteria;


use Viabo\shared\domain\Collection;
use function Lambdish\Phunctional\reduce;

final class Filters extends Collection
{

    public static function fromValues(array $values): self
    {
        return new self(array_map(self::filterBuilder() , $values));
    }

    private static function filterBuilder(): callable
    {
        return fn(array $values): Filter => Filter::fromValues($values);
    }

    public function add(Filter $filter): self
    {
        return new self(array_merge($this->items() , [$filter]));
    }

    public static function empty(): self
    {
        return new self([]);
    }

    public function count(): int
    {
        return count($this->items());
    }

    public function get(): array
    {
        return $this->items();
    }

    protected function type(): string
    {
        return Filter::class;
    }

    public function serialize(): string
    {
        return reduce(
            static fn(string $accumulate , Filter $filter): string => sprintf(
                '%s^%s' ,
                $accumulate ,
                $filter->serialize()
            ) ,
            $this->items() ,
            ''
        );
    }

}