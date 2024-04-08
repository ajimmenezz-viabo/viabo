<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\create;


use Viabo\spei\shared\domain\stp\StpRepository;
use Viabo\spei\stpAccount\domain\services\StpAccountFinderByCriteria;
use Viabo\spei\stpAccount\domain\StpAccount;
use Viabo\spei\stpAccount\domain\StpAccountRepository;

final readonly class BalanceStpAccountCreator
{
    public function __construct(
        private StpRepository              $STPRepository,
        private StpAccountRepository       $repository,
        private StpAccountFinderByCriteria $finder
    )
    {
    }

    public function __invoke(string $company): void
    {
        $stpAccounts = [];
        if (empty($company)) {
            $stpAccounts = $this->repository->searchAll();
        } else {
            $filter = [['field' => 'company.value', 'operator' => '=', 'value' => $company]];
            $stpAccounts[] = $this->finder->__invoke($filter);
        }

        $this->updateBalanceStpAccounts($stpAccounts);
    }

    private function updateBalanceStpAccounts(array $stpAccounts): void
    {
        array_map(function (StpAccount $stpAccount) {
            $balance = $this->STPRepository->searchBalance($stpAccount->decrypt());
            $stpAccount->updateBalance($balance['saldo']);
            $this->repository->update($stpAccount);
        }, $stpAccounts);
    }
}