<?php declare(strict_types=1);


namespace Viabo\business\services\application\update;


use Viabo\shared\domain\bus\command\Command;

final readonly class UpdateCommerceServiceCommand implements Command
{
    public function __construct(
        public string $commerceId ,
        public string $serviceType ,
        public string $serviceActive
    )
    {
    }
}