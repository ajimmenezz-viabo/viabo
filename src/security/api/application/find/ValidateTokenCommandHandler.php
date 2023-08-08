<?php declare(strict_types=1);


namespace Viabo\security\api\application\find;



use Viabo\security\api\domain\APIToken;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class ValidateTokenCommandHandler implements CommandHandler
{
    public function __construct(private APITokenFinder $finder)
    {
    }

    public function __invoke(ValidateTokenCommand $command): void
    {
        $token = APIToken::create($command->token);
        $this->finder->__invoke($token);
    }
}