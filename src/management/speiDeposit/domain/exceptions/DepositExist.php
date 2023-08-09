<?php declare(strict_types=1);


namespace Viabo\management\speiDeposit\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class DepositExist extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'Movement already exist';
    }
}