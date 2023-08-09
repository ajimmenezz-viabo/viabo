<?php declare(strict_types=1);

namespace Viabo\management\commerceTerminal\domain\services;

use Viabo\management\commerceTerminal\domain\TerminalCommerceId;
use Viabo\management\commerceTerminal\domain\TerminalRepository;
use Viabo\management\commerceTerminal\domain\exceptions\TerminalsNotFound;

final readonly class TerminalsFinder
{
    public function __construct(private TerminalRepository $repository) {
    }

    public function __invoke(TerminalCommerceId $commerceId):array
    {
        $terminals = $this->repository->searchBy($commerceId);

        if (empty($terminals)) {
            return [];
        }

        return $terminals;
    }
}
