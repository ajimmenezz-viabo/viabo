<?php declare(strict_types=1);


namespace Viabo\stp\cardCloud\application\find_cards_stock;


use Viabo\stp\cardCloud\application\CardCloudServiceResponse;
use Viabo\stp\cardCloud\domain\CardCloudRepository;

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