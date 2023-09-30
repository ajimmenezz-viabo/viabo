<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\application\find;

use Viabo\management\commerceTerminal\domain\exceptions\TerminalSpeiCardNotAssigned;
use Viabo\management\commerceTerminal\domain\TerminalRepository;
use Viabo\management\commerceTerminal\domain\TerminalSpeiCardsView;
use Viabo\management\commerceTerminal\domain\TerminalValueId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final class FinderTerminalSpeiCard
{
    public function __construct(public TerminalRepository $repository)
    {
    }

    public function __invoke(TerminalValueId $terminalId):FindTerminalSpeiCardResponse
    {
        $filters = Filters::fromValuesEmpty([
            ['field' => 'terminalId' , 'operator' => '=' , 'value' => $terminalId->value()],
        ]);

        $card = $this->repository->searchSpeiCardsView(new Criteria($filters));

        if(empty($card))
        {
            throw new TerminalSpeiCardNotAssigned();
        }

        $cardsViewData = array_map(function (TerminalSpeiCardsView $view){
            return $view->toArray();
        }, $card);

        return new FindTerminalSpeiCardResponse($cardsViewData[0]);
    }
}
