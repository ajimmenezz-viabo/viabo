<?php declare(strict_types=1);


namespace Viabo\management\cardOperation\domain;


use Viabo\shared\domain\criteria\Criteria;

interface CardOperationRepository
{
    public function save(CardOperations $operations): void;

    public function searchCriteria(Criteria $criteria): array;

    public function update(CardOperations $operations): void;
}