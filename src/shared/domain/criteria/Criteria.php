<?php declare(strict_types=1);


namespace Viabo\shared\domain\criteria;


final readonly class Criteria
{
    public function __construct(
        private Filters $filters ,
        private ?int    $limit = null
    )
    {
    }

    public function hasFilters(): bool
    {
        return $this->filters->count() > 0;
    }

    public function plainFilters(): array
    {
        return $this->filters->get();
    }

    public function limit(): ?int
    {
        return $this->limit;
    }
}