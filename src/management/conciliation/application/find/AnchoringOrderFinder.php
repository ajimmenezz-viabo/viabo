<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\find;


use Viabo\management\conciliation\application\create\ConciliationResponse;
use Viabo\management\conciliation\domain\ConciliationId;
use Viabo\management\conciliation\domain\ConciliationRepository;

final readonly class AnchoringOrderFinder
{
    public function __construct(private ConciliationRepository $repository)
    {
    }

    public function __invoke(ConciliationId $conciliationId): ConciliationResponse
    {
        $conciliation = $this->repository->search($conciliationId);
        return new ConciliationResponse($conciliation->toArray());
    }
}