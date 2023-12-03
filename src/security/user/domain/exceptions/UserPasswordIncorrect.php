<?php declare(strict_types=1);


namespace Viabo\security\user\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class UserPasswordIncorrect extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'El password del usuario es incorrecto';
    }
}