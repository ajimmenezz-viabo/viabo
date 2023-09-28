<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\find;


use Viabo\management\conciliation\domain\ConciliationId;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class AnchoringOrderQueryHandler implements QueryHandler
{
    public function __construct(private AnchoringOrderFinder $finder)
    {
    }

    public function __invoke(AnchoringOrderQuery $query): Response
    {
        $conciliationId = ConciliationId::create($query->anchoringOrderId);
        return $this->finder->__invoke($conciliationId);
    }
}