<?php declare(strict_types=1);


namespace Viabo\spei\shared\domain\stp;


use Viabo\spei\stpAccount\domain\StpAccount;

interface StpRepository
{
    public function searchBalance(array $stpAccount): array;

    public function searchSpeiIn(array $stpAccount, string $date): array;

    public function speiOut(array $stpAccount): array;

    public function processPayment(array $stpAccount, array $transactionData): array;

}