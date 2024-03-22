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

    public static function fromInternalSpeiOut(
        array               $values,
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): static
    {
        return new static(array_map(self::TransactionBuilderInternalSpeiOut($transactionType, $statusId), $values));
    }

    private static function TransactionBuilderInternalSpeiOut(
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): callable
    {
        return fn(array $values): Transaction => Transaction::fromInternalSpeiOut($values, $transactionType, $statusId);
    }

    public static function fromExternalSpeiOut(
        array               $values,
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): static
    {
        return new static(array_map(self::TransactionBuilderExternalSpeiOut($transactionType, $statusId), $values));
    }

    private static function TransactionBuilderExternalSpeiOut(
        TransactionTypeId   $transactionType,
        TransactionStatusId $statusId
    ): callable
    {
        return fn(array $values): Transaction => Transaction::fromExternalSpeiOut($values, $transactionType, $statusId);
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