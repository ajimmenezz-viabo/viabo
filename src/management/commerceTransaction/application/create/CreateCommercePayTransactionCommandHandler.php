<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\create;

use Viabo\management\commerceTransaction\domain\CommercePayTransactionOperationId;
use Viabo\management\commerceTransaction\domain\CommercePayTransactionStatusId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateCommercePayTransactionCommandHandler implements CommandHandler
{
    public function __construct(private CommercePayTransactionCreator $creator)
    {
    }

    public function __invoke(CreateCommercePayTransactionCommand $command):void
    {
        $transaction = $command->transaction;
        $operationId = CommercePayTransactionOperationId::create($command->operationId);
        $transactionStatusId = $transaction['successful'] ? '7' :'8';
        $statusId = new CommercePayTransactionStatusId($transactionStatusId);

        ($this->creator)($operationId,$statusId);


    }


}
