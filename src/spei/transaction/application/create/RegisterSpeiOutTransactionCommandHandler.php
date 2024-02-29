<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\create;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class RegisterSpeiOutTransactionCommandHandler implements CommandHandler
{
    public function __construct(private SpeiOutTransactionRecorder $recorder)
    {
    }

    public function __invoke(RegisterSpeiOutTransactionCommand $command): void
    {
        $this->recorder->__invoke($command->company);
    }
}