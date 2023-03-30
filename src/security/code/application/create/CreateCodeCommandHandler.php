<?php declare(strict_types=1);


namespace Viabo\security\code\application\create;


use Viabo\security\code\domain\CodeUserId;
use Viabo\security\user\domain\services\UserFinder;

final readonly class CreateCodeCommandHandler
{
    public function __construct(private CodeCreator $creator , private UserFinder $userFinder)
    {
    }

    public function __invoke(CreateCodeCommand $command): void
    {
        $userId = new CodeUserId($command->getUserId());
        $userData = ($this->userFinder)($command->getUserId());

        ($this->creator)($userId , $userData);
    }
}