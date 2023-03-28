<?php declare(strict_types=1);


namespace Viabo\shared\domain\criteria;


final class Filter
{
    private $field;
    private $operator;
    private $value;

    public function __construct(
        FilterField    $field ,
        FilterOperator $operator ,
        FilterValue    $value
    )
    {
        $this->field = $field;
        $this->operator = $operator;
        $this->value = $value;
    }

    public static function fromValues(array $values): self
    {
        return new self(
            FilterField::create($values['field'] ?? '') ,
            FilterOperator::create($values['operator'] ?? '') ,
            FilterValue::create($values['value'] ?? '')
        );
    }

    public static function fromValuesEmpty(array $values): self
    {
        return new self(
            FilterField::create($values['field'] ?? '') ,
            FilterOperator::create($values['operator'] ?? '') ,
            new FilterValue($values['value'])
        );
    }

    public function getField(): FilterField
    {
        return $this->field;
    }

    public function getOperator(): FilterOperator
    {
        return $this->operator;
    }

    public function getValue(): FilterValue
    {
        return $this->value;
    }

}