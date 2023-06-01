<?php declare(strict_types=1);


namespace Viabo\business\commerceUser\application\create;


use Viabo\shared\domain\bus\command\Command;

final readonly class CreateCommerceUserCommand implements Command
{
    public function __construct(public string $userId , public string $commerceId)
    {
    }
}