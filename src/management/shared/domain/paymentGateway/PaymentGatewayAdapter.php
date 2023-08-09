<?php declare(strict_types=1);

namespace Viabo\management\shared\domain\paymentGateway;

use Viabo\management\commerceTerminal\domain\TerminalCommerceId;
use Viabo\management\commerceTransaction\domain\CommercePayTransaction;

interface PaymentGatewayAdapter
{
    public function searchTerminalsBy(TerminalCommerceId $commerceId,string $apiKey):array;

    public function collectMoney(CommercePayTransaction $transaction): array;

}