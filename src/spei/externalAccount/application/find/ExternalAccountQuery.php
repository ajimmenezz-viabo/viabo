<?php declare(strict_types=1);


namespace Viabo\spei\externalAccount\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class ExternalAccountQuery implements Query
{
    public function __construct(public string $externalAccountId)
    {
    }
}