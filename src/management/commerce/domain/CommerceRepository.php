<?php declare(strict_types=1);


namespace Viabo\management\commerce\domain;


use Viabo\shared\domain\criteria\Criteria;

interface CommerceRepository
{
    public function searchCriteria(Criteria $criteria): array;
}