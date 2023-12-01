<?php declare(strict_types=1);


namespace Viabo\business\commerce\application\update;


use Viabo\shared\domain\bus\command\Command;

final readonly class UpdateCommerceCommandByRegistration implements Command
{
    public function __construct(
        public string $commerceId ,
        public string $fiscalPersonType ,
        public string $fiscalName ,
        public string $tradeName ,
        public string $rfc ,
        public string $employees ,
        public string $branchOffices ,
        public string $pointSaleTerminal ,
        public string $paymentApi ,
        public string $registerStep
    )
    {
    }

}