<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\find;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\spei\transaction\domain\exceptions\TransactionCreateDateRangeNotDefine;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;

final readonly class TransactionsBalanceFinder
{
    public function __construct(private TransactionRepository $repository)
    {
    }

    public function __invoke(string $initialDate, string $endDate): TransactionResponse
    {
        $this->ensureDates($initialDate, $endDate);
        $transactions = $this->searchTransactions("$initialDate 00:00:00", "$endDate 23:59:59");
        $speisIn = $this->filterSpeiIn($transactions);
        $totalSpeiInAmount = $this->calculateSpeiInTransactionTotalAmount($speisIn);
        $speisOut = $this->filterSpeiOut($transactions);
        $totalSpeiOutAmount = $this->calculateSpeiOutTransactionTotalAmount($speisOut);

        return new TransactionResponse([
            'speiInCount' => count($speisIn),
            'speiInTotal' => $totalSpeiInAmount,
            'speiOutCount' => count($speisOut),
            'speiOutTotal' => $totalSpeiOutAmount,
            'balance' => $totalSpeiInAmount - $totalSpeiOutAmount
        ]);
    }

    private function ensureDates(string $initialDate, string $endDate): void
    {
        if (empty($initialDate) || empty($endDate)) {
            throw new TransactionCreateDateRangeNotDefine();
        }
    }

    private function searchTransactions(string $initialDate, string $endDate): array
    {
        $filters = Filters::fromValues([
            ['field' => 'createDate.value', 'operator' => '>=', 'value' => $initialDate],
            ['field' => 'createDate.value', 'operator' => '<=', 'value' => $endDate]
        ]);
        return $this->repository->searchCriteria(new Criteria($filters));
    }

    public function filterSpeiIn(array $transactions): array
    {
        return array_filter($transactions, function (Transaction $transaction) {
            return $transaction->isSpeiIn();
        });
    }

    public function calculateSpeiInTransactionTotalAmount(array $speiIn): float
    {
        $amounts = array_map(function (Transaction $transaction) {
            return $transaction->amount();
        }, $speiIn);
        return array_sum($amounts);
    }

    public function filterSpeiOut(array $transactions): array
    {
        return array_filter($transactions, function (Transaction $transaction) {
            return $transaction->isSpeiOut();
        });
    }

    public function calculateSpeiOutTransactionTotalAmount(array $speiOut): float
    {
        $amounts = array_map(function (Transaction $transaction) {
            return $transaction->amount();
        }, $speiOut);
        return array_sum($amounts);
    }
}