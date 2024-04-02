<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\find;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\spei\stpAccount\domain\exceptions\StpAccountNotExist;
use Viabo\spei\stpAccount\domain\StpAccount;
use Viabo\spei\stpAccount\domain\StpAccountRepository;

final readonly class StpAccountFinderByCriteria
{
    public function __construct(private StpAccountRepository $repository)
    {
    }

    public function __invoke(array $filter): StpAccountResponse
    {
        $filter = Filters::fromValues($filter);
        $accounts = $this->repository->searchCriteria(new Criteria($filter));

        if (empty($accounts)) {
            throw new StpAccountNotExist('No existe la company');
        }

        return new StpAccountResponse(array_map(function (StpAccount $account) {
            return $account->toArray();
        }, $accounts));
    }
}