<?php declare(strict_types=1);


namespace Viabo\management\conciliation\domain;


interface ConciliationRepository
{
    public function save(Conciliation $conciliation): void;
}