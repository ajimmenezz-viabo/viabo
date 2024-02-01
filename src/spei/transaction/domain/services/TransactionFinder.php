<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain\services;


use Viabo\spei\transaction\domain\exceptions\TransactionNotExist;
use Viabo\spei\transaction\domain\Transaction;
use Viabo\spei\transaction\domain\TransactionRepository;

final readonly class TransactionFinder
{
    public function __construct(private TransactionRepository $repository)
    {
    }

    public function __invoke(string $transactionId): Transaction
    {
        $transaction = $this->repository->search($transactionId);

        if (empty($transaction)) {
            throw new TransactionNotExist();
        }

        return $transaction;
    }
}