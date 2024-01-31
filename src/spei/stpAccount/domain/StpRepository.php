<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\domain;


interface StpRepository
{
    public function searchBalance(StpAccount $stpAccount): array;

}