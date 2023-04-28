<?php declare(strict_types=1);


namespace Viabo\management\card\domain;


use Viabo\shared\domain\criteria\Criteria;

interface CardRepository
{
    public function save(Card $card): void;

    public function searchCriteria(Criteria $criteria): array;
}