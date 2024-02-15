<?php declare(strict_types=1);


namespace Viabo\backoffice\company\application\update;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class AddUserToCompanyCommandHandler implements CommandHandler
{
    public function __construct(private UserCompanyAdder $adder)
    {
    }

    public function __invoke(AddUserToCompanyCommand $command): void
    {
        $this->adder->__invoke($command->companyId, $command->users);
    }
}