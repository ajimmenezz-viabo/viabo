<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\find;

use Viabo\shared\domain\bus\query\Query;

final readonly class FindCommercePayUrlCodeQuery implements Query
{
    public function __construct (public string $commerceId)
    {
    }
}
