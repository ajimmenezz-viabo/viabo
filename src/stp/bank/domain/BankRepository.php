<?php declare(strict_types=1);


namespace Viabo\stp\bank\domain;


interface BankRepository
{
    public function search(string $bankId): Bank|null;

    public function searchAll(): array;
}