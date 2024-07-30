<?php declare(strict_types=1);


namespace Viabo\cardCloud\cards\application\find_cards_stock;


use Viabo\cardCloud\cards\application\CardCloudServiceResponse;
use Viabo\cardCloud\shared\domain\CardCloudRepository;

final readonly class CardCloudCardsStockFinder
{
    public function __construct(private CardCloudRepository $repository)
    {
    }

    public function __invoke(string $businessId): CardCloudServiceResponse
    {
        return new CardCloudServiceResponse($this->repository->searchCardsStock($businessId));
    }

}