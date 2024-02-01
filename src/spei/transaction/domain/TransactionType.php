<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class TransactionType extends StringValueObject
{
    public static function out(): static
    {
        return new static('1');
    }
}