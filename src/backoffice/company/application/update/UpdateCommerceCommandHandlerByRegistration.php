<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class UpdateCommerceCommandHandlerByRegistration implements CommandHandler
{
    public function __construct(private CommerceUpdaterByRegistration $updater)
    {
    }

    public function __invoke(UpdateCommerceCommandByRegistration $command): void
    {
        $this->updater->__invoke(
            $command->commerceId ,
            $command->fiscalPersonType ,
            $command->fiscalName ,
            $command->tradeName ,
            $command->rfc ,
            $command->employees ,
            $command->branchOffices ,
            $command->pointSaleTerminal ,
            $command->paymentApi ,
            $command->registerStep
        );
    }
}