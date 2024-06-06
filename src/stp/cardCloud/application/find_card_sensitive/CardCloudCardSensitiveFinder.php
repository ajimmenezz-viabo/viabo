<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\find_card_sensitive;

use Viabo\stp\cardCloud\application\CardCloudServiceResponse;
use Viabo\stp\cardCloud\domain\CardCloudRepository;

final readonly class CardCloudCardSensitiveFinder
{
    public function __construct(private CardCloudRepository $repository)
    {
    }

    public function __invoke(string $businessId, string $cardId): CardCloudServiceResponse
    {
        return new CardCloudServiceResponse(
            $this->repository->searchCardSensitive($businessId, $cardId)
        );
    }
}
