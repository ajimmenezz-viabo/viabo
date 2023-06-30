<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class ConciliationReferenceNumberEmpty extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'No esta definido el numero de referencia de la orden de fondeo';
    }
}