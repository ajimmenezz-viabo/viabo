<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class ConciliationIdEmpty extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'No esta definido id de la conciliacion';
    }
}