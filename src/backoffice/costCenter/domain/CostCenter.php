<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\domain;


use Viabo\shared\domain\aggregate\AggregateRoot;

final class CostCenter extends AggregateRoot
{
    public function __construct(
        private CostCenterId            $id,
        private CostCenterName          $name,
        private CostCenterCreatedByUser $createdByUser,
        private CostCenterCreateDate    $createDate,
        private CostCenterActive        $active
    )
    {
    }

    public function toArray(): array
    {
        return [
            'id' => $this->id->value(),
            'name' => $this->name->value(),
            'createdByUser' => $this->createdByUser->value(),
            'createDate' => $this->createDate->value(),
            'active' => $this->active->value()
        ];
    }
}