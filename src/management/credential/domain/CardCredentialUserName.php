<?php declare(strict_types=1);


namespace Viabo\management\credential\domain;


use Viabo\shared\domain\utils\Crypt;
use Viabo\shared\domain\utils\Faker;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardCredentialUserName extends StringValueObject
{
    public static function random(): static
    {
        return new static(Crypt::encrypt(Faker::uuid()));
    }

    public function valueDecrypt(): string
    {
        return Crypt::decrypt($this->value);
    }
}