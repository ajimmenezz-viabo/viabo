<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\find_card_details;

use Viabo\stp\cardCloud\application\CardCloudServiceResponse;
use Viabo\stp\cardCloud\domain\CardCloudRepository;

final readonly class CardCloudCardDetailsFinder
{
    public function __construct(private CardCloudRepository $repository)
    {
    }

    public function __invoke(string $businessId, string $cardId, array $owner): CardCloudServiceResponse
    {
        $card = $this->repository->searchCardDetails($businessId, $cardId);
        return new CardCloudServiceResponse(array_merge($card, $owner));
    }
}
