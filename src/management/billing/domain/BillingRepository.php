<?php declare(strict_types=1);


namespace Viabo\management\billing\domain;



use Viabo\shared\domain\criteria\Criteria;

interface BillingRepository
{
    public function save(Billing $deposit): void;

    public function search(BillingId $billingId): Billing|null;

    public function searchCriteria(Criteria $criteria): array|null;

    public function delete(Billing $billing): void;

}