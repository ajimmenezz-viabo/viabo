<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\domain;

use Viabo\shared\domain\valueObjects\DateTimeValueObject;

final class CommercePayTransactionDate extends DateTimeValueObject
{

    public function now(): string
    {
        return $this->date->formatDateTime($this->value , 'YmdHis');
    }
}
