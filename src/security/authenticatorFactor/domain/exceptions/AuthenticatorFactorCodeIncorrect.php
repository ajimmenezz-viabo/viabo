<?php declare(strict_types=1);


namespace Viabo\security\authenticatorFactor\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class AuthenticatorFactorCodeIncorrect extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'El codigo del authenticador de google es erroneo';
    }
}