<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\domain;


use Viabo\shared\domain\criteria\Criteria;

interface CostCenterRepository
{
    public function save(CostCenter $costCenter): void;

    public function search(string $costCenterId): CostCenter|null;

    public function searchAll(): array;

    public function searchCriteria(Criteria $criteria): array;

    public function searchUser(string $userId): CostCenterUser|null;

    public function searchFolioLast(): CostCenter|null;

    public function update(CostCenter $costCenter): void;

    public function delete(CostCenter $costCenter): void;
}