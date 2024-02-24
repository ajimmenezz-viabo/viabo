<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\domain\exceptions;


use Viabo\shared\domain\DomainError;

final class StpAccountNotExist extends DomainError
{
    public function __construct(string $message = '')
    {
        parent::__construct();
        $this->message = $message;
    }

    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return empty($this->message) ? 'No tiene asignado ninguna credenciales de STP' : $this->message;
    }
}