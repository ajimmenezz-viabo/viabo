<?php declare(strict_types=1);


namespace Viabo\management\card\application\update;


use Viabo\management\card\domain\CardOwnerId;
use Viabo\management\shared\domain\card\CardId;
use Viabo\shared\domain\bus\command\CommandHandler;

final readonly class UpdateCardOwnerCommandHandler implements CommandHandler
{
    public function __construct(private CardOwnerUpdater $updater)
    {
    }

    public function __invoke(UpdateCardOwnerCommand $command): void
    {
        $cardId = new CardId($command->cardId);
        $ownerId = CardOwnerId::create($command->userId);

        $this->updater->__invoke($cardId, $ownerId);
    }
}