<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class CommerceNotExist extends DomainError
{
    public function errorCode(): int
    {
        return 404;
    }

    public function errorMessage(): string
    {
        return 'El comercio no existe';
    }
}