<?php declare(strict_types=1);

namespace Viabo\management\terminals\application\find;

use Viabo\shared\domain\bus\query\Query;

final readonly class FindTerminalsQuery implements Query
{
    public function __construct(public string $commerceId)
    {
    }
}
