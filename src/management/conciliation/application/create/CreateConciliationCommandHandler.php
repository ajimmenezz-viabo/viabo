<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\create;


use Viabo\management\conciliation\domain\ConciliationAmount;
use Viabo\management\conciliation\domain\ConciliationEmails;
use Viabo\management\conciliation\domain\ConciliationSpei;
use Viabo\management\shared\domain\card\CardId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class CreateConciliationCommandHandler implements CommandHandler
{
    public function __construct(private ConciliationCreator $creator)
    {
    }

    public function __invoke(CreateConciliationCommand $command): void
    {
        $cardId = CardId::create($command->cardId);
        $amount = ConciliationAmount::create($command->amount);
        $spei = ConciliationSpei::create($command->spei);
        $emails = ConciliationEmails::create($command->emails);

        $this->creator->__invoke($cardId, $amount, $spei, $emails);
    }
}