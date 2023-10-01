<?php declare(strict_types=1);


namespace Viabo\management\fundingOrder\application\create;


use Viabo\shared\domain\bus\query\Query;

final readonly class CreateFundingOrderCommand implements Query
{
    public function __construct(
        public string $cardId ,
        public string $cardNumber ,
        public string $amount ,
        public array  $emails ,
        public string $spei ,
        public string $payCashOption ,
        public array  $payCashData,
        public array  $payCashInstructionsData
    )
    {
    }
}