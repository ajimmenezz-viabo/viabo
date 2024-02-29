<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\find;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\shared\domain\criteria\Order;
use Viabo\shared\domain\criteria\OrderBy;
use Viabo\spei\transaction\domain\exceptions\TransactionCreateDateRangeNotDefine;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;

final readonly class TransactionsFinder
{
    public function __construct(private TransactionRepository $repository)
    {
    }

    public function __invoke(string $initialDate, string $endDate, int $limit, int $page): TransactionResponse
    {
        $this->ensureDates($initialDate, $endDate);
        $total = $this->searchTransactionsTotal();
        $transactions = $this->searchTransactions($initialDate, $endDate, $page, $limit);
        return new TransactionResponse([
            'transactions' => $transactions,
            'limit' => $limit,
            'page' => $page,
            'total' => $total
        ]);
    }

    private function ensureDates(string $initialDate, string $endDate): void
    {
        if (empty($initialDate) || empty($endDate)) {
            throw new TransactionCreateDateRangeNotDefine();
        }
    }

    private function searchTransactionsTotal(): int
    {
        $transactions = $this->repository->searchAll();
        return count($transactions);
    }

    public function searchTransactions(string $initialDate, string $endDate, int $page, int $limit): array
    {
        $offset = $this->calculateOffset($page, $limit);
        $filters = Filters::fromValues([
            ['field' => 'createDate.value', 'operator' => '>=', 'value' => $initialDate],
            ['field' => 'createDate.value', 'operator' => '<=', 'value' => $endDate]
        ]);
        $transactions = $this->repository->searchCriteria(
            new Criteria($filters,
                Order::createDesc(new OrderBy('createDate.value')),
                $offset,
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

    private function calculateOffset(int $page, int $limit): int
    {
        $page = empty($page) ? 1 : $page;
        return ($page - 1) * $limit;
    }
}