<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain;


use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class CommerceRegister extends DateTimeValueObject
{
    public static function create(): self
    {
        return new self(parent::todayDate());
    }

}