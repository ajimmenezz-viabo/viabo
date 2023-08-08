<?php declare(strict_types=1);


namespace Viabo\management\speiDeposit\domain;


use Viabo\shared\domain\utils\DatePHP;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class DepositReference extends StringValueObject
{
    public static function random(): static
    {
        $date = new DatePHP();
        $reference = $date->serializeDate();
        return new static(strval($reference));
    }
}