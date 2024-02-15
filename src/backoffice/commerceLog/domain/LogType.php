<?php declare(strict_types=1);


namespace Viabo\backoffice\commerceLog\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class LogType extends StringValueObject
{
    public static function create(string $value , mixed $updatedByUser): static
    {
        $value = empty($updatedByUser) ? "$value.by.registration" : $value;
        return new static($value);
    }
}