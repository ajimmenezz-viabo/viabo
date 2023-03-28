<?php declare(strict_types=1);


namespace Viabo\shared\infrastructure\persistence;


use Doctrine\Common\Collections\Expr\Comparison;
use Doctrine\Common\Collections\Expr\CompositeExpression;
use Viabo\shared\domain\criteria\Criteria;
use Doctrine\Common\Collections\Criteria as DoctrineCriteria;
use Viabo\shared\domain\criteria\Filter;
use Viabo\shared\domain\criteria\FilterField;

final class DoctrineCriteriaConverter
{
    public function __construct(
        private Criteria $criteria ,
        private array    $criteriaToDoctrineFields = [] ,
        private array    $hydrators = []
    )
    {
    }

    public static function convert(
        Criteria $criteria ,
        array    $criteriaToDoctrineFields = [] ,
        array    $hydrators = []
    ): DoctrineCriteria
    {
        $converter = new self($criteria , $criteriaToDoctrineFields , $hydrators);

        return $converter->convertToDoctrineCriteria();
    }

    private function convertToDoctrineCriteria(): DoctrineCriteria
    {
        return new DoctrineCriteria($this->buildExpression($this->criteria));
    }

    private function buildExpression(Criteria $criteria): ?CompositeExpression
    {
        if ($criteria->hasFilters()) {
            return new CompositeExpression(
                CompositeExpression::TYPE_AND ,
                array_map($this->buildComparison() , $criteria->plainFilters())
            );
        }

        return null;
    }

    private function buildComparison(): callable
    {
        return function (Filter $filter): Comparison {
            $field = $this->mapFieldValue($filter->getField());
            $value = $this->existsHydratorFor($field)
                ? $this->hydrate($field , $filter->getValue()->value())
                : $filter->getValue()->value();

            return new Comparison($field , $filter->getOperator()->value() , $value);
        };
    }

    private function mapFieldValue(FilterField $field)
    {
        return array_key_exists($field->value() , $this->criteriaToDoctrineFields)
            ? $this->criteriaToDoctrineFields[$field->value()]
            : $field->value();
    }

    private function existsHydratorFor($field): bool
    {
        return array_key_exists($field , $this->hydrators);
    }

    private function hydrate($field , string $value)
    {
        return $this->hydrators[$field]($value);
    }
}