<?php declare(strict_types=1);


namespace Viabo\management\webhook\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class WebhookTokenWrong extends DomainError
{
    public function errorCode(): int
    {
        return 401;
    }

    public function errorMessage(): string
    {
        return 'Token invalido';
    }
}