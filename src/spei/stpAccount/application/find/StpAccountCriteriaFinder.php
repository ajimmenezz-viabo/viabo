<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\spei\shared\domain\stp\StpRepository;
use Viabo\spei\stpAccount\domain\StpAccount;
use Viabo\spei\stpAccount\domain\StpAccountRepository;

final readonly class StpAccountCriteriaFinder
{
    public function __construct(private StpAccountRepository $repository, private StpRepository $STPRepository)
    {
    }

    public function __invoke(array $filters): StpAccountResponse
    {
        $filters = Filters::fromValues($filters);
        $account = $this->repository->searchCriteria(new Criteria($filters));
        return new StpAccountResponse(array_map(function (StpAccount $account) {
            $data = $account->decrypt();
            $balance = $this->STPRepository->searchBalance($data);
            $data['balance'] = $balance['saldo'];
            return $data;
        }, $account));
    }
}