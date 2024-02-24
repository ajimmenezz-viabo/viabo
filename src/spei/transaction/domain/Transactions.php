<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\Collection;

final class Transactions extends Collection
{

    public static function fromSpeiIn(
        array               $values,
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): static
    {
        return new static(array_map(self::TransactionBuilder($transactionType, $statusId), $values));
    }

    private static function TransactionBuilder(
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): callable
    {
        return fn(array $values): Transaction => Transaction::fromSpeiIn($values, $transactionType, $statusId);
    }

    public function elements(): array
    {
        return $this->items();
    }

    public function toArray(): array
    {
        return array_map(function (Transaction $transaction) {
            return $transaction->toArray();
        }, $this->items());
    }

    protected function type(): string
    {
        return Transaction::class;
    }
}