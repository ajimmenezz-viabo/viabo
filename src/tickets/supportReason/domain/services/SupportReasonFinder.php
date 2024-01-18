<?php declare(strict_types=1);


namespace Viabo\tickets\supportReason\domain\services;


use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;
use Viabo\tickets\supportReason\domain\SupportReasonRepository;

final readonly class SupportReasonFinder
{
    public function __construct(private SupportReasonRepository $repository)
    {
    }

    public function searchCriteria(Filters $filters): array
    {
        return $this->repository->searchCriteria(new Criteria($filters));
    }
}