<?php declare(strict_types=1);

namespace Viabo\management\terminals\application\find;

use Viabo\management\terminals\domain\services\TerminalsFinder;
use Viabo\management\terminals\domain\Terminal;
use Viabo\management\terminals\domain\TerminalCommerceId;
use Viabo\management\terminals\domain\TerminalRepository;

final readonly class TerminalFinder
{
    public function __construct(private TerminalRepository $repository, private TerminalsFinder $finder) 
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
