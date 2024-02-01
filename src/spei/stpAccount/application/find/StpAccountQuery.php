<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class StpAccountQuery implements Query
{
    public function __construct(
        public string $userProfileId ,
        public string $userStpAccountId ,
        public string $commerceStpAccountId
    )
    {
    }
}