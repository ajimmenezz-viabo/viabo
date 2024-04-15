<?php declare(strict_types=1);


namespace Viabo\backoffice\commission\domain;


use Viabo\backoffice\shared\domain\company\CompanyId;

interface CommissionRepository
{
    public function save(Commission $commission): void;

    public function search(CompanyId $commerceId): Commission|null;

    public function update(Commission $commission): void;
}