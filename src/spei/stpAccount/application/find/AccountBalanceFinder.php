<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\spei\shared\domain\stp\StpRepository;
use Viabo\spei\stpAccount\domain\services\StpAccountFinder;

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

        return new AccountResponse($this->format($balance , $account->number()));
    }

    private function format(array $balance , string $number): array
    {
        return [
            'accountNumber' => $number ,
            'balance' => $balance['saldo'] ,
            'pendingCharges' => $balance['cargosPendientes']
        ];
    }
}