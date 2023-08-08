<?php declare(strict_types=1);

namespace Viabo\management\shared\domain\paymentGateway;

use Viabo\management\commerceTerminal\domain\TerminalCommerceId;

interface PaymentGatewayAdapter
{
    public function searchTerminalsBy(TerminalCommerceId $commerceId,string $pharosKey):array;

    public function transactionProcessor(string $merchantId, array $cardBank, array $commercePay):array;
}
