<?php declare(strict_types=1);


namespace Viabo\security\code\application\delete;


use Viabo\security\code\domain\CodeValue;
use Viabo\security\shared\domain\user\UserId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CodeCheckerCommandHandler implements CommandHandler
{
    public function __construct(private CodeChecker $checker)
    {
    }

    public function __invoke(CodeCheckerCommand $command): void
    {
        $userId = new UserId($command->userId);
        $verificationCode = new CodeValue($command->verificationCode);

        $this->checker->__invoke($userId , $verificationCode);
    }
}