<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class UnreconciledMasterCardMovementsQuery implements Query
{
    public function __construct(
        public string $cardNumber ,
        public string $anchoringOrderAmount ,
        public string $anchoringOrderRegisterDate ,
        public string $clientKey ,
        public float  $threshold ,
        public array  $conciliation ,
        public array  $cardOperations
    )
    {
    }
}