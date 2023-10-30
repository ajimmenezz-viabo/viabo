<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class CardsMovementsEmpty extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'No hay movimientos definidos';
    }
}