<?php declare(strict_types=1);


namespace Viabo\management\commercePay\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class CommercePayIdEmpty extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'No esta definido el id de pay';
    }
}