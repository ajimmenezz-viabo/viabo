<?php declare(strict_types=1);


namespace Viabo\security\user\application\create;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateCompaniesAdminUserCommandHandler implements CommandHandler
{
    public function __construct(private UserCreator $creator)
    {
    }

    public function __invoke(CreateCompaniesAdminUserCommand $command): void
    {
        $userProfileId = '3';
        $this->creator->__invoke(
            $command->userId,
            $userProfileId,
            $command->name,
            $command->lastname,
            $command->phone,
            $command->email
        );
    }
}