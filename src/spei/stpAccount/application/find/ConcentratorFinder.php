<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\spei\stpAccount\domain\StpAccount;
use Viabo\spei\stpAccount\domain\StpAccountRepository;

final readonly class ConcentratorFinder
{
    public function __construct(private StpAccountRepository $repository)
    {
    }

    public function __invoke(string $businessId): StpAccountResponse
    {
        $accounts = $this->repository->searchAll($businessId);
        return new StpAccountResponse(array_map(function (StpAccount $account) {
            return ['id' => $account->id(), 'name' => $account->company()];
        }, $accounts));
    }
}