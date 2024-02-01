<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class TransactionConceptEmpty extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'No esta definido el concepto';
    }
}