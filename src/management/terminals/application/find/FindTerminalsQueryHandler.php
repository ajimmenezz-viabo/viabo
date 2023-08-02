<?php declare(strict_types=1);

namespace Viabo\management\terminals\application\find;

use Viabo\shared\domain\bus\query\Response;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\management\terminals\domain\TerminalCommerceId;

final readonly class FindTerminalsQueryHandler implements QueryHandler
{
    public function __construct(private TerminalFinder $finder)
    {
        
    }
    
    public function __invoke(FindTerminalsQuery $query):Response
    {
        $commerceId = TerminalCommerceId::create($query->commerceId);

        return ($this->finder)($commerceId);
    }
}
