<?php declare(strict_types=1);


namespace Viabo\security\code\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class CodeExpired extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'El código a expirado';
    }
}