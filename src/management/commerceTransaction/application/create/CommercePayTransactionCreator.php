<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\create;

use Viabo\management\commerceTransaction\domain\CommercePayTransaction;
use Viabo\management\commerceTransaction\domain\CommercePayTransactionOperationId;
use Viabo\management\commerceTransaction\domain\CommercePayTransactionRepository;
use Viabo\management\commerceTransaction\domain\CommercePayTransactionStatusId;

final readonly class CommercePayTransactionCreator
{
    public function __construct(private CommercePayTransactionRepository $repository)
    {
    }

    public function __invoke(
        CommercePayTransactionOperationId $operationId,
        CommercePayTransactionStatusId $statusId):void
    {
        $commerceTransaction = CommercePayTransaction::create(
            $operationId,
            $statusId,
        );

        $this->repository->save($commerceTransaction);
    }
}
