<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\application\find;

use Viabo\management\commerceTerminal\domain\services\TerminalsFinder as TerminalsFinderService ;
use Viabo\management\commerceTerminal\domain\TerminalCommerceId;
use Viabo\management\commerceTerminal\domain\TerminalView;

final readonly class TerminalFinder
{
    public function __construct(private TerminalsFinderService $finder)
    {
    }

    public function __invoke(TerminalCommerceId $commerceId, mixed $speiCardsData):FindTerminalResponse
    {
        $terminals =($this->finder)($commerceId);

        $speiCards = $this->getSpeiCards($speiCardsData);

        return new FindTerminalResponse(array_map(function(TerminalView $terminal) use($speiCards){
             $data = $terminal->toArray();
             $data['isConciliationExternal'] = $terminal->isConciliationExternal($speiCards);
            return $data;
        },$terminals));
    }

    private function getSpeiCards(mixed $speiCardsData): array
    {
        $speiCards = [];

        foreach ($speiCardsData as $item) {
            if (isset($item['speiCard'])) {
                $speiCards[] = $item['speiCard'];
            }
        }
        return $speiCards;
    }
}
