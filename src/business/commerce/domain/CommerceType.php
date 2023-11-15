<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommerceType extends StringValueObject
{
    public function isInformal(): bool
    {
        $informalType = '2';
        return $this->value === $informalType;
    }
}