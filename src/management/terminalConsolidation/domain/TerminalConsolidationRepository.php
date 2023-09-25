<?php

namespace Viabo\management\terminalConsolidation\domain;

use Viabo\shared\domain\criteria\Criteria;

interface TerminalConsolidationRepository
{
    public function searchCriteria(Criteria $criteria):array;

}
