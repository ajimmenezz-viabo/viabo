<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\shared\domain\bus\query\Query;

final readonly class AccountBalanceQuery implements Query
{
    public function __construct(
        public string $profileId ,
        public string $userStpAccountId ,
        public string $commerceStpAccountId
    )
    {
    }
}