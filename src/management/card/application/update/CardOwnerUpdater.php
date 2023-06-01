<?php declare(strict_types=1);


namespace Viabo\management\card\application\update;


use Viabo\management\card\domain\CardOwnerId;
use Viabo\management\card\domain\CardRepository;
use Viabo\management\card\domain\CardStatusId;
use Viabo\management\card\domain\services\CardFinder;
use Viabo\management\shared\domain\card\CardId;
use Viabo\shared\domain\bus\event\EventBus;

final readonly class CardOwnerUpdater
{
    public function __construct(
        private CardRepository $repository ,
        private CardFinder     $finder ,
        private EventBus       $bus
    )
    {
    }

    public function __invoke(CardId $cardId , CardOwnerId $ownerId): void
    {
        $card = $this->finder->__invoke($cardId);

        $card->updateOwner($ownerId, new CardStatusId('5'));

        $this->repository->update($card);

        $this->bus->publish(...$card->pullDomainEvents());
    }
}