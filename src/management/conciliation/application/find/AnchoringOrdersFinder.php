<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\find;


use Viabo\management\conciliation\application\create\ConciliationResponse;
use Viabo\management\conciliation\domain\ConciliationRepository;
use Viabo\management\conciliation\domain\ConciliationView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class AnchoringOrdersFinder
{

    public function __construct(private ConciliationRepository $repository)
    {
    }

    public function __invoke(array $cardsData): ConciliationResponse
    {
        $cardsId = $this->cardsId($cardsData);
        $filters = Filters::fromValuesEmpty([
            ['field' => 'cardId' , 'operator' => 'in' , 'value' => $cardsId ]
        ]);
        $anchoringOrders = $this->repository->searchView(new Criteria($filters));
        return new ConciliationResponse(array_map(function (ConciliationView $conciliation){
            return $conciliation->toArray();
        }, $anchoringOrders));
    }

    private function cardsId(array $cardsData): string
    {
        $cardsIds = array_map(function (array $cardData) {
            return $cardData['id'];
        } , $cardsData);

        return implode(',' , $cardsIds);
    }
}