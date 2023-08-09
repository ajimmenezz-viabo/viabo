<?php declare(strict_types=1);

namespace Viabo\management\commerceTransaction\application\create;

use Viabo\management\shared\domain\commercePay\CommercePayId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateCommercePayTransactionCommandHandler implements CommandHandler
{
    public function __construct(private CommercePayTransactionCreator $creator)
    {
    }

    public function __invoke(CreateCommercePayTransactionCommand $command): void
    {
        $commercePayId = CommercePayId::create($command->commercePayData['id']);
        $commercePayData = $command->commercePayData;
        $commercePayData['merchantId'] = $command->merchantId;
        $commercePayData['apiKey'] = $command->apiKey;

        $this->creator->__invoke(
            $commercePayId ,
            $commercePayData ,
            $command->cardData
        );
    }


}
