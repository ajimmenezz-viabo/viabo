<?php declare(strict_types=1);


namespace Viabo\security\user\application\create;


use Viabo\shared\domain\bus\command\Command;

final readonly class CreateUserCommand implements Command
{
    public function __construct(public string $name , public string $email , public string $phone)
    {
    }
}