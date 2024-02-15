<?php declare(strict_types=1);


namespace Viabo\backoffice\company\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class CompanyRFCExist extends DomainError
{
    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'Ya esta registrado el RFC';
    }
}