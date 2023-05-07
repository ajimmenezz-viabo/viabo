<?php declare(strict_types=1);


namespace Viabo\management\card\application\find;


use Viabo\management\card\domain\services\CardFinder as CardFinderService;
use Viabo\management\shared\domain\card\CardId;

final readonly class CardFinder
{
    public function __construct(private CardFinderService $finder)
    {
    }

    public function __invoke(CardId $cardId): CardResponse
    {
        $card = $this->finder->__invoke($cardId);
        return new CardResponse($card->toArray());
    }
}