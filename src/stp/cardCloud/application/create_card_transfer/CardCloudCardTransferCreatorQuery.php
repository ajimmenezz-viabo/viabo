<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\create_card_transfer;

use Viabo\shared\domain\bus\query\Query;

final readonly class CardCloudCardTransferCreatorQuery implements Query
{
    public function __construct(
        public string $businessId,
        public string $sourceType,
        public string $source,
        public string $destinationType,
        public string $destination,
        public int    $amount,
        public string $description
    )
    {
    }
}