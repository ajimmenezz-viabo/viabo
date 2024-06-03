<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\find_sub_account_cards;

use Viabo\stp\cardCloud\application\CardCloudServiceResponse;
use Viabo\stp\cardCloud\domain\CardCloudRepository;

final readonly class CardCloudSubAccountCardsFinder
{
    public function __construct(private CardCloudRepository $repository)
    {
    }

    public function __invoke(string $businessId, string $subAccountId): CardCloudServiceResponse
    {
        return new CardCloudServiceResponse(
            $this->repository->searchSubAccountCards($businessId, $subAccountId)
        );
    }
}
