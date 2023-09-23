<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain;


use Viabo\shared\domain\criteria\Criteria;

interface ConciliationRepository
{
    public function save(Conciliation $conciliation): void;

    public function search(ConciliationReferenceNumber $referenceNumber): ?Conciliation;

    public function searchCriteria(Criteria $criteria): array;

    public function searchView(Criteria $criteria): array;
}