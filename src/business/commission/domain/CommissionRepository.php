<?php declare(strict_types=1);


namespace Viabo\business\commission\domain;


use Viabo\business\shared\domain\commerce\CommerceId;

interface CommissionRepository
{
    public function save(Commission $commission): void;

    public function search(CommerceId $commerceId): Commission|null;

    public function update(Commission $commission): void;
}