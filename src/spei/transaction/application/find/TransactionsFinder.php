<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\find;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\shared\domain\criteria\Order;
use Viabo\shared\domain\criteria\OrderBy;
use Viabo\shared\domain\utils\DatePHP;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;

final readonly class TransactionsFinder
{
    public function __construct(private TransactionRepository $repository)
    {
    }

    public function __invoke(string $initialDate, string $endDate, string $account, int $limit): TransactionResponse
    {
        $transactions = $this->searchTransactions($initialDate, $endDate, $account, $limit);
        return new TransactionResponse($transactions);
    }

    public function searchTransactions(string $initialDate, string $endDate, string $account, int $limit): array
    {
        $limit = empty($limit) ? null : $limit;
        $endDate = $this->setDefaultDateIfEmpty($endDate);
        $filters = Filters::fromValues([
            ['field' => 'createDate.value', 'operator' => '>=', 'value' => "$initialDate 00:00:00"],
            ['field' => 'createDate.value', 'operator' => '<=', 'value' => $endDate]
        ]);
        $filtersOr = Filters::fromValues([
            ['field' => 'sourceAccount.value', 'operator' => '=', 'value' => $account],
            ['field' => 'destinationAccount.value', 'operator' => '=', 'value' => $account]
        ]);
        $criteria = new Criteria($filters,
            Order::createDesc(new OrderBy('createDate.value')),
            null,
            $limit
        );
        $criteria->addOr($filtersOr);
        $transactions = $this->repository->searchCriteria($criteria);

        return array_map(function (Transaction $transaction) {
            $data = $transaction->toArray();
            unset(
                $data['typeId'],
                $data['statusId'],
                $data['destinationEmail'],
                $data['createdByUser'],
                $data['apiData'],
                $data['active']
            );
            return $data;
        }, $transactions);
    }

    private function setDefaultDateIfEmpty(string $endDate): string
    {
        $date = new DatePHP();
        $endDate = empty($endDate) ? $date->now() : $endDate;
        return "$endDate 23:59:59";
    }

}