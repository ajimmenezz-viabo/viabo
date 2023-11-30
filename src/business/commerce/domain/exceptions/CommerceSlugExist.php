<?php declare(strict_types=1);


namespace Viabo\business\commerce\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class CommerceSlugExist extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'Ya esta registrado el slug';
    }
}