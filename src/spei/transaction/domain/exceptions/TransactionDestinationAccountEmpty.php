<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class TransactionDestinationAccountEmpty extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'No esta definido la cuenta destino';
    }
}