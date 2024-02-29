<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain\services;


use Viabo\spei\transaction\domain\exceptions\TransactionStatusIdNotExist;
use Viabo\spei\transaction\domain\TransactionRepository;
use Viabo\spei\transaction\domain\TransactionStatusId;

final readonly class StatusFinder
{
    public function __construct(private TransactionRepository $repository)
    {
    }

    public function inTransit(): TransactionStatusId
    {
        $statusId = $this->repository->searchStatus('1');

        if (empty($statusId)) {
            throw new TransactionStatusIdNotExist();
        }

        return $statusId;
    }

    public function liquidated(): TransactionStatusId
    {
        $statusId = $this->repository->searchStatus('3');

        if (empty($statusId)) {
            throw new TransactionStatusIdNotExist();
        }

        return $statusId;
    }
}