<?php declare(strict_types=1);


namespace Viabo\management\speiDeposit\domain;



use Viabo\shared\domain\criteria\Criteria;

interface DepositRepository
{
    public function save(Deposit $deposit): void;

    public function searchCriteria(Criteria $criteria): array|null;

}