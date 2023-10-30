<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\domain;

use Viabo\shared\domain\criteria\Criteria;

interface TerminalRepository
{
    public function save(Terminal $terminal):void;

    public function searchView(Criteria $criteria):array;

}
