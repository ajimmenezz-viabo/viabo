<?php declare(strict_types=1);

namespace Viabo\stp\cardCloud\application\find_sub_account_movements_by_company;

use Viabo\stp\cardCloud\application\CardCloudServiceResponse;
use Viabo\stp\cardCloud\domain\CardCloudRepository;

final readonly class SubAccountCardCloudServiceMovementsByCompanyFinder
{
    public function __construct(private CardCloudRepository $repository)
    {
    }

    public function __invoke(
        string  $businessId,
        string  $subAccountId,
        ?string $fromDate,
        ?string $toDate
    ): CardCloudServiceResponse
    {
        return new CardCloudServiceResponse(
            $this->repository->searchMovements($businessId, $subAccountId, $fromDate, $toDate)
        );
    }
}
