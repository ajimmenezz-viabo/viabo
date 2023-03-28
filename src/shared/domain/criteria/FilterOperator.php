<?php declare(strict_types=1);


namespace Viabo\shared\domain\criteria;


use Viabo\shared\domain\criteria\exceptions\FilterOperatorEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class FilterOperator extends StringValueObject
{

    public static function create($value): self
    {
        self::validate($value);
        return new self(strtoupper($value));
    }

    private static function validate(?string $value)
    {
        if (empty($value)) {
            throw new FilterOperatorEmpty();
        }
    }

    public function isTypeIN(): bool
    {
        return $this->value === 'IN' || $this->value === 'NOT IN';
    }

    public function isTypeLike(): bool
    {
        return $this->value === 'LIKE' || $this->value === 'NOT LIKE';
    }
}