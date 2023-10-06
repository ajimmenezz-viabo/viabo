<?php declare(strict_types=1);


namespace Viabo\management\fundingOrder\application\update;


use Viabo\management\fundingOrder\domain\FundingOrderReferencePayCash;
use Viabo\management\fundingOrder\domain\FundingOrderRepository;
use Viabo\management\fundingOrder\domain\FundingOrderStatusId;
use Viabo\shared\domain\bus\event\EventBus;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class FundingOrderStatusUpdater
{
    public function __construct(private FundingOrderRepository $repository , private EventBus $bus)
    {
    }

    public function __invoke(FundingOrderReferencePayCash $referencePayCash , FundingOrderStatusId $status): void
    {
        $filters = Filters::fromValues([
            ['field' => 'referencePayCash.value' , 'operator' => '=' , 'value' => $referencePayCash->value()]
        ]);
        $fundingOrder = $this->repository->searchCriteria(new Criteria($filters));

        if (empty($fundingOrder)) {
            return;
        }

        $fundingOrder = $fundingOrder[0];
        $fundingOrder->updateStatus($status);
        $this->repository->update($fundingOrder);

        $this->bus->publish(...$fundingOrder->pullDomainEvents());
    }
}