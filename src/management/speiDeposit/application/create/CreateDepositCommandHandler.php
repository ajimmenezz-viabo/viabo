<?php declare(strict_types=1);


namespace Viabo\management\speiDeposit\application\create;


use Viabo\management\speiDeposit\domain\DepositAPIKey;
use Viabo\management\speiDeposit\domain\DepositData;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateDepositCommandHandler implements CommandHandler
{
    public function __construct(private DepositCreator $creator)
    {
    }

    public function __invoke(CreateDepositCommand $command): void
    {
        $data = DepositData::create($command->depositData);
        $apiReference = DepositAPIKey::create($command->depositData['key'] ?? null);

        $this->creator->__invoke($apiReference , $data);
    }
}