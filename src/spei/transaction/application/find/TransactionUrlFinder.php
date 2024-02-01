<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\find;


use Viabo\spei\transaction\domain\services\TransactionFinder;

final readonly class TransactionUrlFinder
{
    public function __construct(private TransactionFinder $finder)
    {
    }

    public function __invoke(string $transactionId): TransactionResponse
    {
        $transaction = $this->finder->__invoke($transactionId);
        return new TransactionResponse(['url' => $transaction->url()]);
    }
}