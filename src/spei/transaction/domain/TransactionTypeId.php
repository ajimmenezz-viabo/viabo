<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

class TransactionTypeId extends StringValueObject
{
    private string $id;
    private string $name;

    public static function out(): static
    {
        return new static('1');
    }

    public static function in(): static
    {
        return new static('2');
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