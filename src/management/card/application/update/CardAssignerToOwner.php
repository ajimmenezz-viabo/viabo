<?php declare(strict_types=1);


namespace Viabo\management\card\application\update;


use Viabo\business\commerce\application\find\FindCommerceQuery;
use Viabo\management\card\domain\CardCommerceId;
use Viabo\management\card\domain\CardId;
use Viabo\management\card\domain\CardOwnerId;
use Viabo\management\card\domain\CardRepository;
use Viabo\management\card\domain\services\CardFinder;
use Viabo\security\user\application\find\FindUserQuery;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\bus\query\QueryBus;

final readonly class CardAssignerToOwner
{
    public function __construct(
        private CardRepository $repository ,
        private QueryBus       $queryBus ,
        private CardFinder     $finder ,
        private EventBus       $bus
    )
    {
    }

    public function __invoke(CardId $cardId , CardOwnerId $ownerId): void
    {
        $this->ensureExist($ownerId);
        $card = ($this->finder)($cardId);
        $card->assignTo($ownerId);

        $this->repository->update($card);

        $this->bus->publish(...$card->pullDomainEvents());
    }

    private function ensureExist(CardOwnerId $ownerId): void
    {
        if ($ownerId->isNotEmpty()) {
            $userEmail = '';
            $this->queryBus->ask(new FindUserQuery($ownerId->value() , $userEmail));
        }
    }
}