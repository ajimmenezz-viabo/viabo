<?php declare(strict_types=1);


namespace Viabo\spei\transaction\domain\services;


use Viabo\spei\transaction\domain\exceptions\TransactionTypeIdNotExist;
use Viabo\spei\transaction\domain\TransactionRepository;
use Viabo\spei\transaction\domain\TransactionTypeId;

final readonly class TransactionTypeFinder
{

    public function __construct(private TransactionRepository $repository)
    {
    }

    public function speiOutType(): TransactionTypeId
    {
        $typeId = $this->repository->searchType('1');

        if (empty($typeId)) {
            throw new TransactionTypeIdNotExist();
        }

        return $typeId;
    }
}