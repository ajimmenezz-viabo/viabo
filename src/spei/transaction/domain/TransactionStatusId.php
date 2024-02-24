<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class TransactionStatusId extends StringValueObject
{
    private string $id;
    private string $name;

    public static function transitionLiquidation(): static
    {
        return new static('1');
    }

    public static function liquidated(): static
    {
        return new static('3');
    }

    public function id(): string
    {
        return $this->id;
    }

    public function name(): string
    {
        return $this->name;
    }
}