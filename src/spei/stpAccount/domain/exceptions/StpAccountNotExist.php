<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class StpAccountNotExist extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'No tiene asignado ninguna credenciales de STP';
    }
}