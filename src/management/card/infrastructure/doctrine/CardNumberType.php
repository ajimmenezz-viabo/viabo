<?php declare(strict_types=1);


namespace Viabo\management\card\infrastructure\doctrine;


use Viabo\management\shared\domain\card\CardNumber;
use Viabo\shared\infrastructure\persistence\UuidType;

final class CardNumberType extends UuidType
{
    protected function typeClassName(): string
    {
        return CardNumber::class;
    }
}