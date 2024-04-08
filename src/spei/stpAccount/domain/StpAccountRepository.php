<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\domain;


use Viabo\shared\domain\criteria\Criteria;

interface StpAccountRepository
{
    public function search(string $stpAccountId): StpAccount|null;

    public function searchCriteria(Criteria $criteria): array;

    public function searchAll(): array;

    public function update(StpAccount $stpAccount): void;
}