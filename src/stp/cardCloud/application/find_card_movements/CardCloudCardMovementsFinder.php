<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\find_card_movements;

use Viabo\stp\cardCloud\application\CardCloudServiceResponse;
use Viabo\stp\cardCloud\domain\CardCloudRepository;

final readonly class CardCloudCardMovementsFinder
{
    public function __construct(private CardCloudRepository $repository)
    {
    }

    public function __invoke(string $businessId, string $cardId, string $fromDate, string $toDate): CardCloudServiceResponse
    {
        return new CardCloudServiceResponse(
            $this->repository->searchCardMovements($businessId, $cardId, $fromDate, $toDate)
        );
    }
}
