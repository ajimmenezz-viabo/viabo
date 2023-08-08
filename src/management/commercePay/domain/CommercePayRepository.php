<?php declare(strict_types=1);

namespace Viabo\management\commercePay\domain;


use Viabo\shared\domain\criteria\Criteria;

interface CommercePayRepository
{
    public function save(CommercePay $commercePay): void;

    public function searchCriteriaView(Criteria $criteria): array;

    public function searchBy(CommercePayReference $referenceId):CommercePay|null;
}
