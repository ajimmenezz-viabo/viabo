<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\domain;


use Viabo\shared\domain\valueObjects\StringValueObject;

final class CardMovementTransactionId extends StringValueObject
{
    public function isSame(string $operationId): bool
    {
        return str_contains($this->value , $operationId);
    }
}