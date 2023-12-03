<?php declare(strict_types=1);


namespace Viabo\business\services\domain;


use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\criteria\Criteria;

interface ServiceRepository
{
    public function save(Service $service): void;

    public function searchCriteria(Criteria $criteria): array;

    public function update(Service $service): void;

    public function delete(CommerceId $commerceId): void;
}