<?php declare(strict_types=1);


namespace Viabo\management\fundingOrder\application\find;


use Viabo\management\fundingOrder\application\create\FundingOrderResponse;
use Viabo\management\fundingOrder\domain\FundingOrderId;
use Viabo\management\fundingOrder\domain\FundingOrderRepository;

final readonly class FundingOrderFinder
{
    public function __construct(private FundingOrderRepository $repository)
    {
    }

    public function __invoke(FundingOrderId $conciliationId): FundingOrderResponse
    {
        $fundingOrder = $this->repository->search($conciliationId);
        return new FundingOrderResponse($fundingOrder->toArray());
    }
}