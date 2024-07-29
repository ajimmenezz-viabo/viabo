<?php declare(strict_types=1);


namespace Viabo\cardCloud\cards\application\find_card_id_from_cardholder;


use Viabo\shared\domain\bus\query\Query;

final readonly class CardCloudIdQueryFromCardHolder implements Query
{
    public function __construct(public int $number, public int $nip, public string $date)
    {
    }
}