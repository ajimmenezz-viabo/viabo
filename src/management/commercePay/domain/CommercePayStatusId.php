<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain;

use Viabo\shared\domain\valueObjects\StringValueObject;

final class CommercePayStatusId extends StringValueObject
{

    const APPROVED = '7';

    public function isApproved(): bool
    {
        return $this->value === self::APPROVED;
    }
}
