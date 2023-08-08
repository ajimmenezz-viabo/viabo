<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain\exceptions;

use Viabo\shared\domain\DomainError;

final class CommercePayReferenceIdEmpty extends DomainError
{

    public function errorCode(): int
    {
        return 400;
    }

    public function errorMessage(): string
    {
        return 'La referencia del cobro se encuentra vacia';
    }
}
