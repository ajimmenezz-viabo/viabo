<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\find_card_movements;

use Viabo\shared\domain\bus\query\Query;

final readonly class CardCloudCardMovementsQuery implements Query
{
    public function __construct(
        public string $businessId,
        public string $cardId,
        public string $fromDate,
        public string $toDate
    )
    {
    }
}
