<?php declare(strict_types=1);


namespace Viabo\management\shared\domain\paymentCash;


use Viabo\management\fundingOrder\domain\FundingOrder;

interface PaymentCashAdapter
{
    public function createReference(FundingOrder $conciliation): string;

    public function searchReference(FundingOrder $conciliation): array;
}