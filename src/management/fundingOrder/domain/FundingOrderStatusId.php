<?php declare(strict_types=1);


namespace Viabo\management\fundingOrder\domain;


use Viabo\management\fundingOrder\domain\exceptions\FundingOrderStatusIdEmpty;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class FundingOrderStatusId extends StringValueObject
{
    private const STATUS_LIQUIDATED = '11';
    private const STATUS_CANCELED = '9';
    private const STATUS_AWAITING = '6';

    public static function create(string $value): self
    {
        self::validate($value);
        return new self($value);
    }

    public static function validate(string $value): void
    {
        if (empty($value)) {
            throw new FundingOrderStatusIdEmpty();
        }
    }

    public function cancel(): static
    {
        return new static(self::STATUS_CANCELED);
    }

    public function conciliation(): static
    {
        return new static(self::STATUS_LIQUIDATED);
    }

    public function hasPendingStatus(): bool
    {
        return $this->value === self::STATUS_AWAITING;
    }

}