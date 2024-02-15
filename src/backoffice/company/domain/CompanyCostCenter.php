<?php declare(strict_types=1);


namespace Viabo\backoffice\company\domain;


final class CompanyCostCenter
{
    public function __construct(
        private string $id,
        private string $name
    )
    {
    }

    public function toArray()
    {
        return ['id' => $this->id, 'name' => $this->name];
    }
}