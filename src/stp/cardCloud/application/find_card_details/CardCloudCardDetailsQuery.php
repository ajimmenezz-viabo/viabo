<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\find_card_details;

use Viabo\shared\domain\bus\query\Query;

final readonly class CardCloudCardDetailsQuery implements Query
{
    public function __construct(public string $businessId, public string $cardId, public array $owner)
    {
    }
}
