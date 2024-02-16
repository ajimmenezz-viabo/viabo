<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\domain;


final class CostCenterUser
{
    public function __construct(
        private string $id,
        private string $profileId,
        private string $name,
        private string $lastname
    )
    {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id,
            'profileId' => $this->profileId,
            'name' => $this->name,
            'lastname' => $this->lastname,
        ];
    }
}