<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\spei\shared\domain\stp\StpRepository;
use Viabo\spei\stpAccount\domain\StpAccount;
use Viabo\spei\stpAccount\domain\StpAccountRepository;

final readonly class StpAccountsFinder
{
    public function __construct(private StpAccountRepository $repository, private StpRepository $STPRepository)
    {
    }

    public function __invoke(): AccountResponse
    {
        $accounts = $this->repository->searchAll();
        return new AccountResponse(array_map(function (StpAccount $account) {
            $data = $account->decrypt();
            $balance = $this->STPRepository->searchBalance($data);
            $data['balance'] = $balance['saldo'];
            return $data;
        }, $accounts));
    }
}