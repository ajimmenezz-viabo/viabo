<?php declare(strict_types=1);


namespace Viabo\security\api\application\find;



use Viabo\shared\domain\bus\command\Command;

final readonly class ValidateTokenCommand implements Command
{
    public function __construct(public ?string $token)
    {
    }
}