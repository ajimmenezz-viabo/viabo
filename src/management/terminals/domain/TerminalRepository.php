<?php declare(strict_types=1);

namespace Viabo\management\terminals\domain;

interface TerminalRepository
{
    public function searchBy(TerminalCommerceId $commerceId):array;
}
