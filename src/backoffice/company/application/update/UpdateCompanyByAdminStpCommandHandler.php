<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class UpdateCompanyByAdminStpCommandHandler implements CommandHandler
{
    public function __construct(private CompanyUpdaterByAdminStp $updater)
    {
    }

    public function __invoke(UpdateCompanyByAdminStpCommand $command): void
    {
        $this->updater->__invoke(
            $command->userId,
            $command->companyId,
            $command->fiscalName,
            $command->commercialName,
            $command->assignedUsers,
            $command->costCenters,
            $command->commissions
        );
    }
}