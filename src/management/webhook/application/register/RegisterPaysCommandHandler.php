<?php declare(strict_types=1);


namespace Viabo\management\webhook\application\register;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class RegisterPaysCommandHandler implements CommandHandler
{
    public function __construct(private PaymentRecorder $recorder)
    {
    }

    public function __invoke(RegisterPaysCommand $command): void
    {
        $this->recorder->__invoke($command->token, $command->pays);
    }
}