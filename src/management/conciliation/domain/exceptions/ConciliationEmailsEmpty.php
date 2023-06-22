<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class ConciliationEmailsEmpty extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'No esta definido ningún correo';
    }
}