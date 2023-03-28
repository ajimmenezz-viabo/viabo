<?php declare(strict_types=1);


namespace Viabo\shared\infrastructure\persistence;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filter;

final class MysqlCriteriaConverter
{
    public function __construct(private Criteria $criteria)
    {
    }

    public static function converter(Criteria $criteria): string
    {
        $converter = new self($criteria);
        return $converter->buildExpression();
    }

    private function buildExpression(): string
    {
        $filters = $this->getPlainFiltersAnd();
        $filters = $this->getPlainFilterOr($filters);

        return empty($filters) ? '' : "where $filters";
    }

    private function getPlainFiltersAnd(): string
    {
        if ($this->criteria->hasConditionsAnd()) {
            $filtersAnd = $this->criteria->getFiltersAnd();
            return implode(' and ' , $this->plainFilters($filtersAnd));
        }

        return '';
    }

    private function getPlainFilterOr(string $filters): string
    {
        if ($this->criteria->hasConditionsOr()) {
            $filtersOr = $this->criteria->getFiltersOr();
            $filtersOr = implode(' or ' , $this->plainFilters($filtersOr));
            $filters .= strpos($filters , 'and') || strlen($filters) > 0 ? " or $filtersOr" : $filtersOr;
        }

        return $filters;
    }

    private function plainFilters(array $filters): array
    {
        return array_map(function (Filter $filter) {
            return $this->plainFilter($filter);
        } , $filters);
    }

    private function plainFilter(Filter $filter): string
    {
        $field = $filter->getField()->value();
        $operator = $filter->getOperator()->value();

        if ($filter->getOperator()->isTypeIN()) {
            $cleanValue = $filter->getValue()->value();
            return "{$field} {$operator} ({$cleanValue})";
        }

        if ($filter->getOperator()->isTypeLike()) {
            $cleanValue = $filter->getValue()->value();
            return "{$field} {$operator} '%{$cleanValue}%'";
        }

        $cleanValue = $filter->getValue()->value();
        return "{$field} {$operator} {$cleanValue}";
    }
}