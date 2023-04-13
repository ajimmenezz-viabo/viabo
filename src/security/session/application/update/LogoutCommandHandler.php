<?php declare(strict_types=1);


namespace Viabo\security\session\application\update;


use Viabo\security\session\domain\services\SessionUpdater;
use Viabo\security\shared\domain\user\UserId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class LogoutCommandHandler implements CommandHandler
{
    public function __construct(private SessionUpdater $updater)
    {
    }

    public function __invoke(LogoutCommand $command): void
    {
        $userId = new UserId($command->userId);

        $this->updater->__invoke($userId);
    }
}