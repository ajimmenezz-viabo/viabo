<?php declare(strict_types=1);


namespace Viabo\security\user\application\create;


use Viabo\shared\domain\bus\command\Command;

final readonly class CreateAdministratorUserCommand implements Command
{
    public function __construct(
        public string $userId,
        public string $userProfileId,
        public string $name,
        public string $lastname,
        public string $email,
        public string $phone,
    )
    {
    }
}