<?php declare(strict_types=1);


namespace Viabo\security\module\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class FindUserModelsQuery implements Query
{
    public function __construct(public array $userPermissions)
    {
    }
}