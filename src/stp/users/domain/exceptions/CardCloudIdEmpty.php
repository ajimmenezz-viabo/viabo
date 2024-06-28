<?php declare(strict_types=1);


namespace Viabo\stp\users\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class CardCloudIdEmpty extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'No esta definida la id de la tarjeta';
    }
}