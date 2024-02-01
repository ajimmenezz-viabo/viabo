<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\find;


use Viabo\spei\transaction\domain\exceptions\TransactionNotExist;
use Viabo\spei\transaction\domain\TransactionRepository;

final readonly class TransactionFinder
{
    public function __construct(private TransactionRepository $repository)
    {
    }

    public function __invoke(string $transactionId): TransactionResponse
    {
        $transaction = $this->repository->search($transactionId);

        if (empty($transaction)) {
            throw new TransactionNotExist();
        }

        return new TransactionResponse($transaction->toArray());
    }
}