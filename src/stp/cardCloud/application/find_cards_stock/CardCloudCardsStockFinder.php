<?php declare(strict_types=1);


namespace Viabo\stp\cardCloud\application\find_cards_stock;


use Viabo\stp\cardCloud\application\CardCloudServiceResponse;
use Viabo\stp\cardCloud\domain\CardCloudRepository;

final readonly class CardCloudCardsStockFinder
{
    public function __construct(private CardCloudRepository $repository)
    {
    }

    public function __invoke(string $businessId, array $owners): CardCloudServiceResponse
    {
        $cards = $this->repository->searchCardsStock($businessId);
        return new CardCloudServiceResponse(array_map(function (array $card) use ($owners) {
            $card = $this->addOwnerData($owners, $card);
            unset($card['cardId']);
            return $card;
        }, $cards['cards']));
    }

    private function addOwnerData(array $owners, array $card): array
    {
        foreach ($owners as $owner) {
            if ($card['card_id'] === $owner['cardId']) {
                return array_merge($card, $owner);
            }
        }
        return array_merge($card, ['cardId' => '', 'ownerId' => '', 'name' => '']);
    }

}