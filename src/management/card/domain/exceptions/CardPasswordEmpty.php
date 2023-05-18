<?php declare(strict_types=1);


namespace Viabo\management\card\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class CardPasswordEmpty extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'No esta definido el password de api set';
    }
}