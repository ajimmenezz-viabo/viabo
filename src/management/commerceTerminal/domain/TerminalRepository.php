<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\domain;

interface TerminalRepository
{
    public function save(Terminal $terminal):void;
    public function searchBy(TerminalCommerceId $commerceId):array;
}
