<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\spei\stpAccount\domain\StpAccount;
use Viabo\spei\stpAccount\domain\StpAccountRepository;

final readonly class StpAccountsFinder
{
    public function __construct(private StpAccountRepository $repository)
    {
    }

    public function __invoke(): AccountResponse
    {
        $accounts = $this->repository->searchAll();
        return new AccountResponse(array_map(function (StpAccount $account) {
            return $account->decrypt();
        }, $accounts));
    }
}