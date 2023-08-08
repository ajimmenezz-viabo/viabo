<?php declare(strict_types=1);

namespace Viabo\management\commercePay\application\find;

use Viabo\shared\domain\bus\query\Response;

final readonly class FindCommercePayResponse implements Response
{
    public function __construct(public array $data)
    {
    }
}
