<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class AccountBalanceQueryHandler implements QueryHandler
{
    public function __construct(private AccountBalanceFinder $finder)
    {
    }

    public function __invoke(AccountBalanceQuery $query): Response
    {
        return $this->finder->__invoke(
            $query->profileId ,
            $query->userStpAccountId ,
            $query->commerceStpAccountId
        );
    }
}