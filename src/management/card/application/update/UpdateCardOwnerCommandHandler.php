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
        $ownerId = CardOwnerId::create($command->userId);
        foreach ($command->cards as $cardId) {
            $cardId = new CardId($cardId);
            $this->updater->__invoke($cardId , $ownerId);
        }

    }
}