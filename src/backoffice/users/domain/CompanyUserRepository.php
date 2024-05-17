<?php declare(strict_types=1);


namespace Viabo\backoffice\users\domain;


use Viabo\shared\domain\criteria\Criteria;

interface CompanyUserRepository
{
    public function save(CompanyUser $user): void;

    public function searchCriteria(Criteria $criteria): array;

    public function delete(CompanyUser $user): void;

}