<?php declare(strict_types=1);


namespace Viabo\shared\domain\criteria;


use Viabo\shared\domain\valueObjects\Enum;
use InvalidArgumentException;

final class OrderType extends Enum
{
    public const ASC  = 'asc';
    public const DESC = 'desc';
    public const NONE = 'none';

    public function isNone(): bool
    {
        return $this->equals(self::none());
    }

    protected function throwExceptionForInvalidValue($value): never
    {
        throw new InvalidArgumentException($value);
    }
}