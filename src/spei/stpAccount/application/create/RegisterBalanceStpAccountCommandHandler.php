<?php declare(strict_types=1);


namespace Viabo\spei\stpAccount\application\create;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class RegisterBalanceStpAccountCommandHandler implements CommandHandler
{
    public function __construct(private BalanceStpAccountCreator $creator)
    {
    }

    public function __invoke(RegisterBalanceStpAccountCommand $command): void
    {
        $this->creator->__invoke($command->company);
    }
}