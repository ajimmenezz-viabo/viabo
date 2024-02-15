<?php declare(strict_types=1);


namespace Viabo\backoffice\costCenter\domain;


interface CostCenterRepository
{
    public function searchAll(): array;
}