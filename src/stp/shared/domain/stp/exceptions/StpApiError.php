<?php declare(strict_types=1);

namespace Viabo\stp\shared\domain\stp\exceptions;

use Viabo\shared\domain\DomainError;

final class StpApiError extends DomainError
{
    public function __construct(string $message, int $code)
    {
        $this->message = $message;
        $this->code = $code;
        parent::__construct();
    }

    public function errorCode(): int
    {
        return $this->code;
    }

    public function errorMessage(): string
    {
        return $this->message;
    }
}
