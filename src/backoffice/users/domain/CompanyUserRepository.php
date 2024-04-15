<?php declare(strict_types=1);


namespace Viabo\backoffice\users\domain;


interface CompanyUserRepository
{
    public function save(CompanyUser $user): void;
}