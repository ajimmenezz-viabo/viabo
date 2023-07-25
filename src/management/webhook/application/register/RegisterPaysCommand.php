<?php declare(strict_types=1);


namespace Viabo\management\webhook\application\register;


use Viabo\shared\domain\bus\command\Command;

final readonly class RegisterPaysCommand implements Command
{
    public function __construct(public ?string $token, public ?array $pays)
    {
    }
}