<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find_stp_account_by_criteria;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\spei\stpAccount\application\find\StpAccountResponse;
use Viabo\spei\stpAccount\domain\StpAccount;
use Viabo\spei\stpAccount\domain\StpAccountRepository;

final readonly class StpAccountCriteriaFinder
{
    public function __construct(private StpAccountRepository $repository)
    {
    }

    public function __invoke(array $filters): StpAccountResponse
    {
        $filters = Filters::fromValues($filters);
        $account = $this->repository->searchCriteria(new Criteria($filters));
        return new StpAccountResponse(array_map(function (StpAccount $account) {
            return $account->decrypt();
        }, $account));
    }
}