<?php declare(strict_types=1);

namespace Viabo\business\commerce\domain;

use Viabo\shared\domain\criteria\Criteria;

interface CommerceRepository
{
    public function save(Commerce $commerce): void;

    public function searchCriteria(Criteria $criteria): array;
}