<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class CardMovementsQuery implements Query
{
    public function __construct(
        public string $cardNumber ,
        public string $cardPaymentProcessorId ,
        public string $initialDate ,
        public string $finalDate ,
        public string $clientKey ,
        public array  $operations
    )
    {
    }
}