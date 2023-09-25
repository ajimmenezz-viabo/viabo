<?php declare(strict_types=1);

namespace Viabo\management\cardMovement\application\find;

use Viabo\shared\domain\bus\query\Query;

final readonly class CardMovementsConsolidatedQuery implements Query
{
    public function __construct(
        public array  $speiCards,
        public string $initialDate,
        public string $finalDate,
        public ?array $movementsConsolitaded
    )
    {
    }
}
