<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\application\create;


use Viabo\business\commerceUser\domain\CommerceUserKey;
use Viabo\business\shared\domain\commerce\CommerceId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateCommerceUserCommandHandler implements CommandHandler
{
    public function __construct(private CommerceUserCreator $creator)
    {
    }

    public function __invoke(CreateCommerceUserCommand $command): void
    {
        $commerceId = CommerceId::create($command->commerceId);
        $userId = CommerceUserKey::create($command->userId);

        $this->creator->__invoke($commerceId, $userId);
    }
}