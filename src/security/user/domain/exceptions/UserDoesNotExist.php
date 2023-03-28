<?php declare(strict_types=1);


namespace Viabo\security\user\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class UserDoesNotExist extends DomainError
{
    private string $value;

    public function __construct(string $value)
    {
        $this->value = $value;
        parent::__construct();
    }

    public function errorCode(): int
    {
        return 401;
    }

    public function errorMessage(): string
    {
        return "El usuario con $this->value no existe";
    }
}