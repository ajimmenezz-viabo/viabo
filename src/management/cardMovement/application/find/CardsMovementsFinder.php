<?php declare(strict_types=1);


namespace Viabo\management\cardMovement\application\find;


use Viabo\management\cardMovement\domain\CardMovementRepository;
use Viabo\management\cardMovement\domain\CardMovementView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class CardsMovementsFinder
{
    public function __construct(private CardMovementRepository $repository)
    {
    }

    public function __invoke(
        array  $cards ,
        string $startDate ,
        string $endDate ,
        string $type
    ): CardsMovementsResponse
    {
        $cardsIds = $this->filterIds($cards);
        $filters = Filters::fromValues([
            ['field' => 'cardId' , 'operator' => 'IN' , 'value' => implode(',' , $cardsIds)] ,
            ['field' => 'operationType' , 'operator' => '=' , 'value' => strtoupper($type)]
        ]);
        $cardMovements = $this->repository->matchingView(new Criteria($filters));
        return new CardsMovementsResponse(array_map(function (CardMovementView $movement) {
            return $movement->toArray();
        } , $cardMovements));
    }

    private function filterIds(array $cards): array
    {
        return array_map(function (array $card) {
            return $card['id'];
        } , $cards);
    }
}