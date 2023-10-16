<?php declare(strict_types=1);

namespace Viabo\management\terminalConsolidation\application\find;

use Viabo\management\shared\domain\commerce\CommerceId;
use Viabo\management\terminalConsolidation\domain\TerminalConsolidation;
use Viabo\management\terminalConsolidation\domain\TerminalConsolidationRepository;
use Viabo\management\terminalConsolidation\domain\TerminalConsolidationTerminalId;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class FinderTerminalConsolidationTransactions
{
    public function __construct(private TerminalConsolidationRepository $repository)
    {
    }

    public function __invoke(CommerceId $commerceId, TerminalConsolidationTerminalId $terminalId):TerminalConsolidationTransactionsResponse
    {
        $filter = [
            ['field' => 'commerceId', 'operator' => '=', 'value' => $commerceId->value()]
        ];

        if (!empty($terminalId->value())) {
            $filter[] = ['field' => 'terminalId.value', 'operator' => '=', 'value' => $terminalId->value()];
        }
        $filters = Filters::fromValues($filter);

        $movementsTerminalConsolidation = $this->repository->searchCriteria(new Criteria($filters));

        $movementsTerminalConsolidation = empty($movementsTerminalConsolidation) ? [] : $movementsTerminalConsolidation;

        return new TerminalConsolidationTransactionsResponse(array_map(function (TerminalConsolidation $terminalConsolidation){
            return $terminalConsolidation->toArray();
        }, $movementsTerminalConsolidation));
    }
}
