<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class CommerceUserKeyEmpty extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'No esta definido el Id del usuario';
    }

}