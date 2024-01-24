<?php declare(strict_types=1);


namespace Viabo\spei\externalAccount\domain;


use Viabo\shared\domain\criteria\Criteria;

interface ExternalAccountRepository
{
    public function save(ExternalAccount $externalAccount): void;

    public function searchCriteria(Criteria $criteria): array;
}