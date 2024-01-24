<?php declare(strict_types=1);


namespace Viabo\spei\bank\domain;


interface BankRepository
{
    public function searchAll(): array;
}