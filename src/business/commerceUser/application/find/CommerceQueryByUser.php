<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class CommerceQueryByUser implements Query
{
    public function __construct(public string $userId)
    {
    }
}