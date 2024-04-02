<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\create;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateCompanyCommandHandler implements CommandHandler
{
    public function __construct(private CompanyCreator $creator)
    {
    }

    public function __invoke(CreateCompanyCommand $command): void
    {
        $this->creator->__invoke(
            $command->userId,
            $command->companyId,
            $command->fiscalName,
            $command->commercialName,
            $command->rfc,
            $command->stpAccount,
            $command->assignedUsers,
            $command->costCenters,
            $command->commissions,
        );
    }
}