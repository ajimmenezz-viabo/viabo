<?php declare(strict_types=1);


namespace Viabo\spei\transaction\application\create;


use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class SpeiProcessPaymentsCommandHandler implements CommandHandler
{
    public function __construct(private SpeiPaymentProcessor $paymentProcessor)
    {
    }

    public function __invoke(SpeiProcessPaymentsCommand $command): void
    {
        $this->paymentProcessor->__invoke(
            $command->userId ,
            $command->stpAccount ,
            $command->externalAccounts ,
            $command->concept
        );
    }
}