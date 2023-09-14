<?php declare(strict_types=1);


namespace Viabo\management\conciliation\application\find;


use Viabo\management\conciliation\domain\ConciliationReferenceNumber;
use Viabo\shared\domain\bus\query\QueryHandler;
use Viabo\shared\domain\bus\query\Response;

final readonly class ConciliationLeagueDataQueryHandler implements QueryHandler
{
    public function __construct(private ConciliationLeagueDataFinder $finder)
    {
    }

    public function __invoke(ConciliationLeagueDataQuery $query): Response
    {
        $referenceNumber = ConciliationReferenceNumber::create(strval($query->referenceNumber));

        return $this->finder->__invoke($referenceNumber);
    }
}