<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\application\find;

use Viabo\management\commerceTerminal\domain\TerminalRepository;
use Viabo\management\commerceTerminal\domain\Terminals;
use Viabo\management\commerceTerminal\domain\TerminalShared;
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
        $terminals = $this->searchTerminalsByCommerce($commerceId);
        $terminalsShared = $this->searchTerminalsShared($commerceId);
        $terminals = $terminals->add($terminalsShared);

        return new FindTerminalResponse($terminals->toArray());
    }


    private function searchTerminalsByCommerce(string $commerceId): Terminals
    {
        $filters = Filters::fromValues([
            ['field' => 'commerceId' , 'operator' => '=' , 'value' => $commerceId]
        ]);

        $terminals = $this->repository->searchView(new Criteria($filters));
        return new Terminals($terminals);
    }

    private function searchTerminalsShared(string $commerceId): array
    {
        $terminalsShared = $this->repository->searchTerminalsShared($commerceId);

        $ids = array_map(function (TerminalShared $terminal) {
            return $terminal->terminalId();
        } , $terminalsShared);

        $filters = Filters::fromValues([
            ['field' => 'id' , 'operator' => 'IN' , 'value' => implode(',' , $ids)]
        ]);

        $terminals = $this->repository->searchView(new Criteria($filters));

        return array_map(function (TerminalView $terminal) use ($commerceId){
            $terminal->updateCommerceId($commerceId);
            return $terminal;
        } , $terminals);
    }

}
