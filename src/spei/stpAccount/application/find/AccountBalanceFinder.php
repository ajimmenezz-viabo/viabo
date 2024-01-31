<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\spei\stpAccount\domain\services\StpAccountFinder;
use Viabo\spei\stpAccount\domain\StpRepository;

final readonly class AccountBalanceFinder
{
    public function __construct(
        private StpRepository    $STPRepository ,
        private StpAccountFinder $finder
    )
    {
    }

    public function __invoke(
        string $profileId ,
        string $userStpAccountId ,
        string $commerceStpAccountId
    ): AccountResponse
    {
        $account = $this->finder->__invoke($profileId , $userStpAccountId , $commerceStpAccountId);
        $balance = $this->STPRepository->searchBalance($account);
        $balance['accountNumber'] = $account->number();

        return new AccountResponse($balance);
    }
}