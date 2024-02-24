<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\create;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class RegisterSpeiInTransactionCommandHandler implements CommandHandler
{
    public function __construct(private SpeiInTransactionRecorder $recorder)
    {
    }

    public function __invoke(RegisterSpeiInTransactionCommand $command): void
    {
        $this->recorder->__invoke($command->company, $command->date);
    }
}