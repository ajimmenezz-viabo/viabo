<?php declare(strict_types=1);


namespace Viabo\management\shared\domain\paymentCash;


use Viabo\management\conciliation\domain\Conciliation;

interface PaymentCashAdapter
{
    public function reference(Conciliation $conciliation, array $apiData): string;
}