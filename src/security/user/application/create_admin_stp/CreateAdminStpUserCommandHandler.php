<?php declare(strict_types=1);


namespace Viabo\security\user\application\create_admin_stp;


use Viabo\security\user\application\create\UserCreator;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateAdminStpUserCommandHandler implements CommandHandler
{
    public function __construct(private UserCreator $creator)
    {
    }

    public function __invoke(CreateAdminStpUserCommand $command): void
    {
        $this->creator->__invoke(
            $command->userId,
            $command->userProfileId,
            $command->name,
            $command->lastname,
            $command->phone,
            $command->email,
            $command->businessId
        );
    }
}