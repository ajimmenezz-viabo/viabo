<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\find;


use Viabo\management\conciliation\application\create\ConciliationResponse;
use Viabo\management\conciliation\domain\ConciliationReferenceNumber;
use Viabo\management\conciliation\domain\ConciliationRepository;
use Viabo\management\conciliation\domain\exceptions\ConciliationNotExist;

final readonly class ConciliationFinder
{
    public function __construct(private ConciliationRepository $repository)
    {
    }

    public function __invoke(ConciliationReferenceNumber $referenceNumber): ConciliationResponse
    {
        $conciliation = $this->repository->search($referenceNumber);

        if(empty($conciliation)){
            throw new ConciliationNotExist();
        }

        return new ConciliationResponse($conciliation->toArray());
    }
}