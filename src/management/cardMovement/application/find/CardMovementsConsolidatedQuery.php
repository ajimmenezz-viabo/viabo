<?php declare(strict_types=1);

namespace Viabo\management\cardMovement\application\find;

use Viabo\shared\domain\bus\query\Query;

final readonly class CardMovementsConsolidatedQuery implements Query
{
    public function __construct(
        public array  $speiCard,
        public string $initialDate,
        public ?array $movementsConsolitaded
    )
    {
    }
}
