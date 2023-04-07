<?php declare(strict_types=1);

namespace Viabo\business\services\application\create;

use Viabo\business\commerce\application\update\UpdateCommerceCommand;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\business\shared\domain\commerce\CommerceLegalRepresentative;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateServicesCommandHandler implements CommandHandler
{
    public function __construct(private ServicesCreator $servicesUpdater)
    {
    }

    public function __invoke(UpdateCommerceCommand $command): void
    {
        $legalRepresentative = new CommerceLegalRepresentative($command->legalRepresentative);
        $commerceId = new CommerceId($command->commerceId);
        $servicesType = $command->services;

        ($this->servicesUpdater)($legalRepresentative , $commerceId , $servicesType);
    }
}