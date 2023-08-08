<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\transaction;

use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class CommercePayTransactionQueryHandler implements QueryHandler
{
    public function __construct(private TransactionCommercePay $transaction)
    {
    }

    public function __invoke(CommercePayTransactionQuery $query):Response
    {
        $lastFour = substr($query->cardNumber, strlen($query->cardNumber)-4, 4);
        $cardBank = [
            'reading_method' => 'key_entry' ,
            'card_number' =>  $query->cardNumber,
            'exp_month' =>  $query->expMonth,
            'exp_year' =>  $query->expYear,
            'sec_code' =>  $query->security,
            'last_four' =>  $lastFour,
            'cardholder_name' =>   $query->cardHolder
        ];

        return ($this->transaction)($query->merchantId,$cardBank,$query->commercePay);
    }
}
