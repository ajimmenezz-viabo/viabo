<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\application\find;

use Viabo\management\card\domain\exceptions\CardNotExist;
use Viabo\management\commerceTerminal\domain\TerminalSpeiCardsView;
use Viabo\management\commerceTerminal\domain\TerminalRepository;
use Viabo\management\shared\domain\card\CardCommerceId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class FinderTerminalSpeiCards
{
    public function __construct(private TerminalRepository $repository)
    {
    }

    public function __invoke(CardCommerceId $commerceId): TerminalSpeiCardsResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'commerceId' , 'operator' => '=' , 'value' => $commerceId->value()],
        ]);

        $card = $this->repository->searchSpeiCardsView(new Criteria($filters));

        $cardsViewData = array_map(function (TerminalSpeiCardsView $view){
            return $view->toArray();
        }, $card) ?? [];

        return new TerminalSpeiCardsResponse($cardsViewData);
    }
}
