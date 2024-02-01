<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class TransactionStatusId extends StringValueObject
{
    public static function inProcess(): static
    {
        return new static('1');
    }
}