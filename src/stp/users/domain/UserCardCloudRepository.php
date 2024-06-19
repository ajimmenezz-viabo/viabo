<?php declare(strict_types=1);


namespace Viabo\stp\users\domain;


use Viabo\shared\domain\criteria\Criteria;

interface UserCardCloudRepository
{
    public function save(UserCardCloud $owner): void;

    public function searchCriteria(Criteria $criteria): array;
}