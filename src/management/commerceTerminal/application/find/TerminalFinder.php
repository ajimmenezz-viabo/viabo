<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\application\find;

use Viabo\management\commerceTerminal\domain\services\TerminalsFinder as TerminalsFinderService ;
use Viabo\management\commerceTerminal\domain\Terminal;
use Viabo\management\commerceTerminal\domain\TerminalCommerceId;
use Viabo\management\commerceTerminal\domain\TerminalRepository;

final readonly class TerminalFinder
{
    public function __construct(private TerminalsFinderService $finder)
    {
    }

    public function __invoke(TerminalCommerceId $commerceId):FindTerminalResponse
    {
        $terminals =($this->finder)($commerceId);

        return new FindTerminalResponse(array_map(function(Terminal $terminal){
            return $terminal->toArray();
        },$terminals));
    }
}