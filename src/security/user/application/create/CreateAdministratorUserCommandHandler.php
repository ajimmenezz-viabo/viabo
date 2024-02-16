<?php declare(strict_types=1);


namespace Viabo\security\user\application\create;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateAdministratorUserCommandHandler implements CommandHandler
{
    public function __construct(private UserCreator $creator)
    {
    }

    public function __invoke(CreateAdministratorUserCommand $command): void
    {
        $this->creator->__invoke(
            $command->userId,
            $command->userProfileId,
            $command->name,
            $command->lastname,
            $command->phone,
            $command->email
        );
    }
}