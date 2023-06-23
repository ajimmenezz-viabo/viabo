<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\create;


use Viabo\shared\domain\bus\query\Query;

final readonly class CreateConciliationQuery implements Query
{
    public function __construct(
        public string $cardId ,
        public string $amount ,
        public string $spei ,
        public array  $emails
    )
    {
    }
}