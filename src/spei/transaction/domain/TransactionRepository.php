<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain;


use Viabo\shared\domain\criteria\Criteria;

interface TransactionRepository
{
    public function save(Transaction $transaction): void;

    public function search(string $transactionId): Transaction|null;

    public function searchCriteria(Criteria $criteria): array;

    public function searchAll(): array;

    public function searchType(string $id): TransactionTypeId|null;

    public function searchStatus(string $id): TransactionStatusId|null;

    public function update(Transaction $transaction): void;
}