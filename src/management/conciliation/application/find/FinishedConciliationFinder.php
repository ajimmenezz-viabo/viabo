<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\find;


use Viabo\management\conciliation\application\create\ConciliationResponse;
use Viabo\management\conciliation\domain\Conciliation;
use Viabo\management\conciliation\domain\ConciliationRepository;
use Viabo\management\shared\domain\card\CardId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class FinishedConciliationFinder
{
    public function __construct(private ConciliationRepository $repository)
    {
    }

    public function __invoke(CardId $cardId): ConciliationResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'cardId' , 'operator' => '=' , 'value' => $cardId->value() ],
            ['field' => 'status.value' , 'operator' => '=' , 'value' => '11' ]
        ]);
        $conciliation = $this->repository->searchCriteria(new Criteria($filters));
        return new ConciliationResponse(array_map(function (Conciliation $conciliation){
            return $conciliation->toArray();
        },$conciliation));
    }
}