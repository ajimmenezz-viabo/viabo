<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\domain;


use Viabo\shared\domain\utils\Crypt;
use Viabo\shared\domain\valueObjects\StringValueObject;

final class StpAccountNumber extends StringValueObject
{
    public function decrypt(): string
    {
        return Crypt::decrypt($this->value);
    }
}