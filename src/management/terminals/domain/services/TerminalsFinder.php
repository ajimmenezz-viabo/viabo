<?php declare(strict_types=1);

namespace Viabo\management\terminals\domain\services;

use Viabo\management\terminals\domain\TerminalCommerceId;
use Viabo\management\terminals\domain\TerminalRepository;
use Viabo\management\terminals\domain\exceptions\TerminalsNotFound;

final readonly class TerminalsFinder
{
    public function __construct(private TerminalRepository $repository) {
    }

    public function __invoke(TerminalCommerceId $commerceId):array
    {
        $terminals = $this->repository->searchBy($commerceId);
        
        if (empty($terminals)) {
            throw new TerminalsNotFound();
        }

        return $terminals;
    }
}
