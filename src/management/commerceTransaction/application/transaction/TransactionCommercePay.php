<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\transaction;

use Viabo\management\shared\infrastructure\paymentGateway\PaymentGatewayPharosAdapter;

final readonly class TransactionCommercePay
{
    public function __construct(private PaymentGatewayPharosAdapter $adapter)
    {
    }

    public function __invoke(string $merchantId,array $cardBank, array $commercePay):CommercePayTransactionResponse
    {
        $transactionProcessor = $this->adapter->transactionProcessor($merchantId, $cardBank,$commercePay);

        return new CommercePayTransactionResponse($transactionProcessor);
    }
}
