<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find_stp_account_by_business;


use Viabo\spei\stpAccount\application\find\StpAccountResponse;
use Viabo\spei\stpAccount\domain\StpAccountRepository;

final readonly class StpAccountFinderByBusiness
{
    public function __construct(private StpAccountRepository $repository)
    {
    }

    public function __invoke(string $businessId): StpAccountResponse
    {
        $account = $this->repository->searchByBusiness($businessId);
        return new StpAccountResponse($account->decrypt());
    }
}