<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommerceBranchOffices extends StringValueObject
{
    public static function create(string $value): self
    {
        return new self(!empty($value) ? $value : '0');
    }
}