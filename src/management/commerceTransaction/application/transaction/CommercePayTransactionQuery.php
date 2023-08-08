<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\transaction;

use Viabo\shared\domain\bus\query\Query;

final readonly class CommercePayTransactionQuery implements Query
{

    public function __construct(
        public string $cardNumber,
        public string $expMonth,
        public string $expYear,
        public string $security,
        public string $cardHolder,
        public string $merchantId,
        public array $commercePay
    ){
    }
}
