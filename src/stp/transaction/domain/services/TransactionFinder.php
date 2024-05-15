<?php declare(strict_types=1);


namespace Viabo\stp\transaction\domain\services;


use Viabo\stp\transaction\domain\exceptions\TransactionNotExist;
use Viabo\stp\transaction\domain\Transaction;
use Viabo\stp\transaction\domain\TransactionRepository;

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