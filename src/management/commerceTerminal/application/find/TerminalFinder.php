<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\application\find;

use Viabo\management\commerceTerminal\domain\TerminalRepository;
use Viabo\management\commerceTerminal\domain\TerminalView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class TerminalFinder
{
    public function __construct(private TerminalRepository $repository)
    {
    }

    public function __invoke(string $commerceId): FindTerminalResponse
    {
        $filters = Filters::fromValues([
            ['field' => 'commerceId' , 'operator' => '=' , 'value' => $commerceId]
        ]);
        $terminals = $this->repository->searchView(new Criteria($filters));
        $terminals = empty($terminals) ? [] : $this->toArray($terminals);

        return new FindTerminalResponse($terminals);
    }

    private function toArray(array $terminals): array
    {
        return array_map(function (TerminalView $terminal) {
            return $terminal->toArray();
        } , $terminals);
    }

}
