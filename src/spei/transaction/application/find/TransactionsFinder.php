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

    public function __invoke(string $initialDate, string $endDate, int $limit): TransactionResponse
    {
        $total = $this->searchTransactionsTotal();
        $transactions = $this->searchTransactions($initialDate, $endDate, $limit);
        return new TransactionResponse([
            'transactions' => $transactions,
            'limit' => $limit,
            'total' => $total
        ]);
    }

    private function searchTransactionsTotal(): int
    {
        $transactions = $this->repository->searchAll();
        return count($transactions);
    }

    public function searchTransactions(string $initialDate, string $endDate, int $limit): array
    {
        $limit = empty($limit) ? null : $limit;
        $endDate = $this->setDefaultDateIfEmpty($endDate);
        $filters = Filters::fromValues([
            ['field' => 'createDate.value', 'operator' => '>=', 'value' => "$initialDate 00:00:00"],
            ['field' => 'createDate.value', 'operator' => '<=', 'value' => $endDate]
        ]);
        $transactions = $this->repository->searchCriteria(
            new Criteria($filters,
                Order::createDesc(new OrderBy('createDate.value')),
                null,
                $limit
            ));

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