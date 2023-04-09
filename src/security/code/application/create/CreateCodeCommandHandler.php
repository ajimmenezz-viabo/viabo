<?php declare(strict_types=1);


namespace Viabo\security\code\application\create;


use Viabo\security\shared\domain\user\UserId;
use Viabo\security\user\domain\services\UserFinder;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateCodeCommandHandler implements CommandHandler
{
    public function __construct(private CodeCreator $creator , private UserFinder $userFinder)
    {
    }

    public function __invoke(CreateCodeCommand $command): void
    {
        $userId = new UserId($command->userId);
        $userData = ($this->userFinder)($userId);

        ($this->creator)($userId , $userData);
    }
}