<?php declare(strict_types=1);


namespace Viabo\spei\bank\domain;


interface BankRepository
{
    public function search(string $bankId): Bank|null;

    public function searchAll(): array;
}