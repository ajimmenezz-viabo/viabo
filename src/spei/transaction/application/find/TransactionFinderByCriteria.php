<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\find;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\spei\transaction\domain\exceptions\TransactionNotExist;
use Viabo\spei\transaction\domain\TransactionRepository;

final readonly class TransactionFinderByCriteria
{
    public function __construct(private TransactionRepository $repository)
    {
    }

    public function __invoke(array $filters): TransactionResponse
    {
        $filters = Filters::fromValues($filters);
        $transaction = $this->repository->searchCriteria(new Criteria($filters));

        if(empty($transaction)){
            throw new TransactionNotExist();
        }

        return new TransactionResponse($transaction[0]->toArray());
    }
}