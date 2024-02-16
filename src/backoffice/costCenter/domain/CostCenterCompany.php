<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\domain;


final class CostCenterCompany
{
    public function __construct(
        private string $id,
        private string $name
    )
    {
    }

    public function toArray(): array
    {
        return ['id' => $this->id, 'name' => $this->name];
    }
}