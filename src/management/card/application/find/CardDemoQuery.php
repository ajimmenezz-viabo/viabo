<?php declare(strict_types=1);


namespace Viabo\management\card\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class CardDemoQuery implements Query
{
    public function __construct(public string $cardNumber , public string $cvv , public string $expiration)
    {
    }
}