<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\application\find;

use Viabo\management\commerceTerminal\domain\exceptions\TerminalsNotFound;
use Viabo\management\commerceTerminal\domain\TerminalRepository;
use Viabo\management\commerceTerminal\domain\TerminalValueId;
use Viabo\management\commerceTerminal\domain\TerminalView;
use Viabo\shared\domain\criteria\Criteria;
use Viabo\shared\domain\criteria\Filters;

final readonly class TerminalViewFinder
{
    public function __construct(private TerminalRepository $repository) {
    }

    public function __invoke(TerminalValueId $merchantId):TerminalMerchantIdResponse
    {
        $filters = [['field' => 'terminalId' , 'operator' => '=' , 'value' => $merchantId->value()]];


        $filters = Filters::fromValuesEmpty($filters);

        $terminals = $this->repository->searchView(new Criteria($filters));

        if (empty($terminals)) {
            throw new TerminalsNotFound();
        }

        return new TerminalMerchantIdResponse( ['merchantId' => $terminals[0]->merchantId]);
    }
}

