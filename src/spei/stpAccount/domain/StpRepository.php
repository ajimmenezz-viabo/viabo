<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\domain;


use Viabo\spei\transaction\domain\Transaction;

interface StpRepository
{
    public function searchBalance(StpAccount $stpAccount): array;

    public function processPayment(Transaction $transaction): void;

}