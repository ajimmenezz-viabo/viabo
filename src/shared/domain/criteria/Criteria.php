<?php declare(strict_types=1);


namespace Viabo\shared\domain\criteria;


final class Criteria
{
    public function __construct(
        private Filters          $filters = new Filters([]) ,
        private AndSpecification $and = new AndSpecification() ,
        private OrSpecification  $or = new OrSpecification()
    )
    {
    }

    public function andWhere(Filters $filters): void
    {
        $this->filters = $filters;
        $this->and->add($filters);
    }

    public function orWhere(Filters $filters): void
    {
        $this->or->add($filters);
    }

    public function hasConditionsAnd(): bool
    {
        return $this->and->count() > 0;
    }

    public function hasConditionsOr(): bool
    {
        return $this->or->count() > 0;
    }

    public function getFiltersAnd(): array
    {
        return $this->and->get();
    }

    public function getFiltersOr(): array
    {
        return $this->or->get();
    }

    public function hasNotFilters(): bool
    {
        return !$this->hasConditionsAnd() && !$this->hasConditionsOr();
    }

    public function hasFilters(): bool
    {
        return $this->filters->count() > 0;
    }

    public function plainFilters(): array
    {
        return $this->filters->get();
    }

    public function clearFilters(): void
    {
        $this->filters = new Filters([]);
    }
}