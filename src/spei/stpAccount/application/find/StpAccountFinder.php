<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\spei\stpAccount\domain\exceptions\StpAccountNotExist;
use Viabo\spei\stpAccount\domain\StpAccountRepository;

final readonly class StpAccountFinder
{
    public function __construct(private StpAccountRepository $repository)
    {
    }

    public function __invoke(string $stpAccountId): AccountResponse
    {
        $account = $this->repository->search($stpAccountId);

        if (empty($account)) {
            throw new StpAccountNotExist();
        }

        return new AccountResponse($account->decrypt());
    }
}