<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\spei\stpAccount\domain\services\StpAccountFinder as StpAccountFinderService;

final readonly class StpAccountFinder
{
    public function __construct(private StpAccountFinderService $finder)
    {
    }

    public function __invoke(
        string $userProfileId ,
        string $userStpAccountId ,
        string $commerceStpAccountId
    ): AccountResponse
    {
        $stpAccount = $this->finder->__invoke($userProfileId , $userStpAccountId , $commerceStpAccountId);

        return new AccountResponse($stpAccount->decrypt());
    }
}