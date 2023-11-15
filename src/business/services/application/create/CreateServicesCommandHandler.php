<?php declare(strict_types=1);

namespace Viabo\business\services\application\create;

use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateServicesCommandHandler implements CommandHandler
{
    public function __construct(private ServicesCreator $servicesUpdater)
    {
    }

    public function __invoke(UpdateViaboServicesCommand $command): void
    {
        $commerceId = new CommerceId($command->commerceId);
        $services = $command->services;

        ($this->servicesUpdater)($commerceId , $services);
    }
}