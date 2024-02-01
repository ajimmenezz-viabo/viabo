<?php declare(strict_types=1);


namespace Viabo\spei\shared\domain\stp;


use Viabo\spei\stpAccount\domain\StpAccount;
use Viabo\spei\transaction\domain\Transaction;

interface StpRepository
{
    public function searchBalance(StpAccount $stpAccount): array;

    public function processPayment(Transaction $transaction): string;

    public function speiOut(array $stpAccount): array;

}